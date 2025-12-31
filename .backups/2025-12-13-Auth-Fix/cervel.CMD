@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@vercel+cervel@0.0.6_typescript@5.9.3\node_modules\@vercel\cervel\bin\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+cervel@0.0.6_typescript@5.9.3\node_modules\@vercel\cervel\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+cervel@0.0.6_typescript@5.9.3\node_modules\@vercel\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+cervel@0.0.6_typescript@5.9.3\node_modules;C:\Vercel\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@vercel+cervel@0.0.6_typescript@5.9.3\node_modules\@vercel\cervel\bin\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+cervel@0.0.6_typescript@5.9.3\node_modules\@vercel\cervel\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+cervel@0.0.6_typescript@5.9.3\node_modules\@vercel\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+cervel@0.0.6_typescript@5.9.3\node_modules;C:\Vercel\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@vercel\cervel\bin\cervel.mjs" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@vercel\cervel\bin\cervel.mjs" %*
)
