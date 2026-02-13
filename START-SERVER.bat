@echo off
echo ========================================
echo  ControlPallets - MySQL Backend Server
echo ========================================
echo.
echo Starting MySQL service...
net start MySQL84

echo.
echo Starting Node.js backend server...
cd backend
start cmd /k "npm start"

echo.
echo ========================================
echo Backend server starting...
echo.
echo Open index-mysql.html in your browser
echo API: http://localhost:3001
echo ========================================
echo.
pause
