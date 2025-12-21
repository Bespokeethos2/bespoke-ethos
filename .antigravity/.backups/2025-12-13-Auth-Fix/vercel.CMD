@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\vercel@48.12.1_@swc+core@1.11.24_typescript@5.9.3\node_modules\vercel\dist\node_modules;C:\Vercel\node_modules\.pnpm\vercel@48.12.1_@swc+core@1.11.24_typescript@5.9.3\node_modules\vercel\node_modules;C:\Vercel\node_modules\.pnpm\vercel@48.12.1_@swc+core@1.11.24_typescript@5.9.3\node_modules;C:\Vercel\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\vercel@48.12.1_@swc+core@1.11.24_typescript@5.9.3\node_modules\vercel\dist\node_modules;C:\Vercel\node_modules\.pnpm\vercel@48.12.1_@swc+core@1.11.24_typescript@5.9.3\node_modules\vercel\node_modules;C:\Vercel\node_modules\.pnpm\vercel@48.12.1_@swc+core@1.11.24_typescript@5.9.3\node_modules;C:\Vercel\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\.pnpm\vercel@48.12.1_@swc+core@1.11.24_typescript@5.9.3\node_modules\vercel\dist\vc.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\.pnpm\vercel@48.12.1_@swc+core@1.11.24_typescript@5.9.3\node_modules\vercel\dist\vc.js" %*
)
