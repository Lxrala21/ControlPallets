<?php
session_start();

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = 'localhost';
$user = 'root';
$pass = 'dLp173Vb';
$db   = 'controlpallets_db';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'DB connection failed: ' . $conn->connect_error]);
    exit();
}

$conn->set_charset('utf8mb4');

// Leer action desde GET o body JSON
$action = $_GET['action'] ?? '';
if (!$action) {
    $input = json_decode(file_get_contents('php://input'), true) ?? [];
    $action = $input['action'] ?? '';
}

// Para POST, leer body
$input = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $input = json_decode($raw, true) ?? [];
}

// ─── PROTECCIÓN: todas las acciones excepto auth requieren sesión ─────────────
if (!in_array($action, ['login', 'logout', 'checkAuth', 'health']) && empty($_SESSION['user'])) {
    http_response_code(401);
    echo json_encode(['error' => 'No autorizado']);
    exit;
}

switch ($action) {

    // ─── AUTH: LOGIN ──────────────────────────────────────────────────────────
    case 'login':
        $USERS = [
            'admin'    => ['password' => password_hash('Admin2026!', PASSWORD_DEFAULT), 'role' => 'admin'],
            'operador' => ['password' => password_hash('Op2026!',    PASSWORD_DEFAULT), 'role' => 'user'],
        ];
        $username = trim($input['username'] ?? '');
        $password = trim($input['password'] ?? '');
        if (isset($USERS[$username]) && password_verify($password, $USERS[$username]['password'])) {
            $_SESSION['user'] = $username;
            $_SESSION['role'] = $USERS[$username]['role'];
            echo json_encode(['success' => true, 'role' => $_SESSION['role'], 'user' => $username]);
        } else {
            http_response_code(401);
            echo json_encode(['success' => false, 'error' => 'Usuario o contraseña incorrectos']);
        }
        break;

    // ─── AUTH: LOGOUT ─────────────────────────────────────────────────────────
    case 'logout':
        session_destroy();
        echo json_encode(['success' => true]);
        break;

    // ─── AUTH: CHECK SESSION ──────────────────────────────────────────────────
    case 'checkAuth':
        if (!empty($_SESSION['user'])) {
            echo json_encode(['authenticated' => true, 'user' => $_SESSION['user'], 'role' => $_SESSION['role']]);
        } else {
            http_response_code(401);
            echo json_encode(['authenticated' => false]);
        }
        break;

    // ─── HEALTH ──────────────────────────────────────────────────────────────
    case 'health':
        echo json_encode(['success' => true, 'status' => 'OK', 'db' => $db]);
        break;

    // ─── PALLETS GET ──────────────────────────────────────────────────────────
    case 'getPallets':
        $result = $conn->query("SELECT id, palletId, piezas, qty, condicion, area, fecha, turno, ubicacion, created_at, updated_at FROM pallets ORDER BY created_at DESC");
        $pallets = [];
        while ($row = $result->fetch_assoc()) {
            $row['qty'] = (int)$row['qty'];
            $pallets[] = $row;
        }
        echo json_encode(['success' => true, 'data' => $pallets]);
        break;

    // ─── PALLETS CREATE ───────────────────────────────────────────────────────
    case 'createPallet':
        $id       = isset($input['id']) ? $input['id'] : (string)round(microtime(true) * 1000);
        $palletId = $input['palletId'] ?? '';
        $piezas   = $input['piezas']   ?? '';
        $qty      = (int)($input['qty'] ?? 0);
        $condicion= $input['condicion']?? '';
        $area     = $input['area']     ?? '';
        $fecha    = $input['fecha']    ?? null;
        $turno    = $input['turno']    ?? '';
        $ubicacion= $input['ubicacion']?? '';

        $stmt = $conn->prepare(
            "INSERT INTO pallets (id, palletId, piezas, qty, condicion, area, fecha, turno, ubicacion)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
        );
        $stmt->bind_param('sssisssss', $id, $palletId, $piezas, $qty, $condicion, $area, $fecha, $turno, $ubicacion);

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'id' => $id]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $stmt->error]);
        }
        break;

    // ─── PALLETS UPDATE ───────────────────────────────────────────────────────
    case 'updatePallet':
        $id       = $input['id']       ?? '';
        $palletId = $input['palletId'] ?? '';
        $piezas   = $input['piezas']   ?? '';
        $qty      = (int)($input['qty'] ?? 0);
        $condicion= $input['condicion']?? '';
        $area     = $input['area']     ?? '';
        $fecha    = $input['fecha']    ?? null;
        $turno    = $input['turno']    ?? '';
        $ubicacion= $input['ubicacion']?? '';

        $stmt = $conn->prepare(
            "UPDATE pallets SET palletId=?, piezas=?, qty=?, condicion=?, area=?, fecha=?, turno=?, ubicacion=?
             WHERE id=?"
        );
        $stmt->bind_param('sssisssss', $palletId, $piezas, $qty, $condicion, $area, $fecha, $turno, $ubicacion, $id);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'affected' => $stmt->affected_rows]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $stmt->error]);
        }
        break;

    // ─── PALLETS DELETE ───────────────────────────────────────────────────────
    case 'deletePallet':
        if ($_SESSION['role'] !== 'admin') {
            http_response_code(403);
            echo json_encode(['error' => 'Sin permisos para eliminar']);
            break;
        }
        $id = $input['id'] ?? '';
        $stmt = $conn->prepare("DELETE FROM pallets WHERE id=?");
        $stmt->bind_param('s', $id);
        if ($stmt->execute()) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $stmt->error]);
        }
        break;

    // ─── UBICACIONES GET ──────────────────────────────────────────────────────
    case 'getUbicaciones':
        $result = $conn->query("SELECT codigo, esBin FROM ubicaciones ORDER BY codigo ASC");
        $ubicaciones = [];
        while ($row = $result->fetch_assoc()) {
            $row['esBin'] = (bool)$row['esBin'];
            $ubicaciones[] = $row;
        }
        echo json_encode(['success' => true, 'data' => $ubicaciones]);
        break;

    // ─── UBICACIONES CREATE ───────────────────────────────────────────────────
    case 'createUbicacion':
        $codigo = $input['codigo'] ?? '';
        $esBin  = isset($input['esBin']) && $input['esBin'] ? 1 : 0;
        $stmt = $conn->prepare("INSERT IGNORE INTO ubicaciones (codigo, esBin) VALUES (?, ?)");
        $stmt->bind_param('si', $codigo, $esBin);
        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'created' => $stmt->affected_rows]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $stmt->error]);
        }
        break;

    // ─── UBICACIONES DELETE ───────────────────────────────────────────────────
    case 'deleteUbicacion':
        if ($_SESSION['role'] !== 'admin') {
            http_response_code(403);
            echo json_encode(['error' => 'Sin permisos para eliminar']);
            break;
        }
        $codigo = $input['codigo'] ?? '';
        $stmt = $conn->prepare("DELETE FROM ubicaciones WHERE codigo=?");
        $stmt->bind_param('s', $codigo);
        if ($stmt->execute()) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => $stmt->error]);
        }
        break;

    // ─── SEED UBICACIONES (primera ejecución) ─────────────────────────────────
    case 'seedUbicaciones':
        $ubicaciones = $input['ubicaciones'] ?? [];
        $count = 0;
        $stmt = $conn->prepare("INSERT IGNORE INTO ubicaciones (codigo, esBin) VALUES (?, ?)");
        foreach ($ubicaciones as $ub) {
            $codigo = $ub['codigo'] ?? '';
            $esBin  = isset($ub['esBin']) && $ub['esBin'] ? 1 : 0;
            $stmt->bind_param('si', $codigo, $esBin);
            $stmt->execute();
            if ($stmt->affected_rows > 0) $count++;
        }
        echo json_encode(['success' => true, 'created' => $count]);
        break;

    // ─── DEFAULT ──────────────────────────────────────────────────────────────
    default:
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Accion desconocida: ' . htmlspecialchars($action)]);
        break;
}

$conn->close();
?>
