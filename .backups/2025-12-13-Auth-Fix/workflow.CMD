@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@workflow+cli@4.0.1-beta.22_ab558e5d272ed6312cd24969af99eed6\node_modules\@workflow\cli\bin\node_modules;C:\Vercel\node_modules\.pnpm\@workflow+cli@4.0.1-beta.22_ab558e5d272ed6312cd24969af99eed6\node_modules\@workflow\cli\node_modules;C:\Vercel\node_modules\.pnpm\@workflow+cli@4.0.1-beta.22_ab558e5d272ed6312cd24969af99eed6\node_modules\@workflow\node_modules;C:\Vercel\node_modules\.pnpm\@workflow+cli@4.0.1-beta.22_ab558e5d272ed6312cd24969af99eed6\node_modules;C:\Vercel\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@workflow+cli@4.0.1-beta.22_ab558e5d272ed6312cd24969af99eed6\node_modules\@workflow\cli\bin\node_modules;C:\Vercel\node_modules\.pnpm\@workflow+cli@4.0.1-beta.22_ab558e5d272ed6312cd24969af99eed6\node_modules\@workflow\cli\node_modules;C:\Vercel\node_modules\.pnpm\@workflow+cli@4.0.1-beta.22_ab558e5d272ed6312cd24969af99eed6\node_modules\@workflow\node_modules;C:\Vercel\node_modules\.pnpm\@workflow+cli@4.0.1-beta.22_ab558e5d272ed6312cd24969af99eed6\node_modules;C:\Vercel\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\@workflow\cli\bin\run.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\@workflow\cli\bin\run.js" %*
)
