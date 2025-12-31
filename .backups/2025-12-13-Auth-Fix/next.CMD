@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\next@16.0.7_@babel+core@7.2_97a69fee7eb4c2ea21c2c95d538de804\node_modules\next\dist\bin\node_modules;C:\Vercel\node_modules\.pnpm\next@16.0.7_@babel+core@7.2_97a69fee7eb4c2ea21c2c95d538de804\node_modules\next\dist\node_modules;C:\Vercel\node_modules\.pnpm\next@16.0.7_@babel+core@7.2_97a69fee7eb4c2ea21c2c95d538de804\node_modules\next\node_modules;C:\Vercel\node_modules\.pnpm\next@16.0.7_@babel+core@7.2_97a69fee7eb4c2ea21c2c95d538de804\node_modules;C:\Vercel\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\next@16.0.7_@babel+core@7.2_97a69fee7eb4c2ea21c2c95d538de804\node_modules\next\dist\bin\node_modules;C:\Vercel\node_modules\.pnpm\next@16.0.7_@babel+core@7.2_97a69fee7eb4c2ea21c2c95d538de804\node_modules\next\dist\node_modules;C:\Vercel\node_modules\.pnpm\next@16.0.7_@babel+core@7.2_97a69fee7eb4c2ea21c2c95d538de804\node_modules\next\node_modules;C:\Vercel\node_modules\.pnpm\next@16.0.7_@babel+core@7.2_97a69fee7eb4c2ea21c2c95d538de804\node_modules;C:\Vercel\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\..\next\dist\bin\next" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\..\next\dist\bin\next" %*
)
