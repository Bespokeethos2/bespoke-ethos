@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@vercel+queue@0.0.0-alpha.29\node_modules\@vercel\queue\bin\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+queue@0.0.0-alpha.29\node_modules\@vercel\queue\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+queue@0.0.0-alpha.29\node_modules\@vercel\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+queue@0.0.0-alpha.29\node_modules;C:\Vercel\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@vercel+queue@0.0.0-alpha.29\node_modules\@vercel\queue\bin\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+queue@0.0.0-alpha.29\node_modules\@vercel\queue\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+queue@0.0.0-alpha.29\node_modules\@vercel\node_modules;C:\Vercel\node_modules\.pnpm\@vercel+queue@0.0.0-alpha.29\node_modules;C:\Vercel\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@vercel\queue\bin\local-discover.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@vercel\queue\bin\local-discover.js" %*
)
