# Sistema de Control de Pallets 📦

Aplicación web para el registro y control de pallets con dashboard interactivo.

## Características

### 📝 Registro de Pallets
- Formulario completo para registrar nuevos pallets
- Campos obligatorios:
  - **Pallet ID**: Identificador único del pallet
  - **Piezas**: Nombre o descripción de las piezas
  - **Condición**: Bueno, Dañado, Reparación, Obsoleto
  - **Área**: Zona o departamento (Almacén, Producción, etc.)
  - **Fecha**: Fecha de registro
  - **Turno**: Matutino, Vespertino, Nocturno
  - **Ubicación**: Ubicación física específica
  - **QTY**: Cantidad de piezas
- Búsqueda en tiempo real
- Validación de IDs duplicados
- Tabla interactiva con todos los pallets registrados

### 📊 Dashboard
- Estadísticas en tiempo real:
  - Total de pallets
  - Pallets en buen estado
  - Pallets dañados
  - Total QTY (suma de cantidades)
- Gráficas interactivas:
  - Pallets por condición (gráfica de dona)
  - Pallets por área (gráfica de barras)
  - Pallets por turno (gráfica de pastel)
- Resumen general con:
  - Porcentajes por condición
  - Promedio de QTY por pallet
  - Área más activa
  - Turno más activo
- Tarjetas informativas con totales

### 💾 Almacenamiento
- Los datos se guardan automáticamente en LocalStorage
- No requiere servidor ni base de datos
- Los datos persisten entre sesiones del navegador

## Cómo Usar

### Instalación
1. Simplemente abre el archivo `index.html` en tu navegador web preferido
2. No requiere instalación de dependencias

### Uso
1. **Registrar un Pallet:**
   - Ve a la pestaña "Registro de Pallets"
   - Completa el formulario con los datos del pallet
   - Haz clic en "Registrar Pallet"

2. **Ver Dashboard:**
   - Ve a la pestaña "Dashboard"
   - Visualiza las estadísticas y gráficas en tiempo real

3. **Buscar Pallets:**
   - Usa el campo de búsqueda en la tabla
   - Busca por código, cliente, estado o ubicación

4. **Eliminar Pallets:**
   - Haz clic en el botón "Eliminar" junto al pallet deseado
   - Confirma la acción

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y diseño responsive)
- JavaScript Vanilla (ES6+)
- Chart.js para las gráficas
- LocalStorage para persistencia de datos

## Compatibilidad

Compatible con todos los navegadores modernos:
- Chrome/Edge (recomendado)
- Firefox
- Safari
- Opera

## Estructura de Archivos

```
ControlPallets/
├── index.html      # Estructura principal
├── styles.css      # Estilos y diseño
├── app.js          # Lógica de la aplicación
└── README.md       # Documentación
```

## Notas Importantes

- Los datos se almacenan localmente en el navegador
- Para acceder desde otro dispositivo, los datos no estarán sincronizados
- Usar "Limpiar Todo" eliminará todos los pallets permanentemente
- Se recomienda hacer respaldos periódicos de los datos si son críticos

## Mejoras Futuras Posibles

- Exportar datos a Excel/CSV
- Importar pallets desde archivo
- Sistema de usuarios con autenticación
- Backend con base de datos para acceso multi-dispositivo
- Más tipos de gráficas y reportes
- Impresión de etiquetas QR para pallets
- Notificaciones para pallets que requieren atención

---

**Versión:** 1.0.0
**Última actualización:** 2026-02-12
