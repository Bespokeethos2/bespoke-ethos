@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@anthropic-ai+sdk@0.71.2_zod@3.25.76\node_modules\@anthropic-ai\sdk\bin\node_modules;C:\Vercel\node_modules\.pnpm\@anthropic-ai+sdk@0.71.2_zod@3.25.76\node_modules\@anthropic-ai\sdk\node_modules;C:\Vercel\node_modules\.pnpm\@anthropic-ai+sdk@0.71.2_zod@3.25.76\node_modules\@anthropic-ai\node_modules;C:\Vercel\node_modules\.pnpm\@anthropic-ai+sdk@0.71.2_zod@3.25.76\node_modules;C:\Vercel\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@anthropic-ai+sdk@0.71.2_zod@3.25.76\node_modules\@anthropic-ai\sdk\bin\node_modules;C:\Vercel\node_modules\.pnpm\@anthropic-ai+sdk@0.71.2_zod@3.25.76\node_modules\@anthropic-ai\sdk\node_modules;C:\Vercel\node_modules\.pnpm\@anthropic-ai+sdk@0.71.2_zod@3.25.76\node_modules\@anthropic-ai\node_modules;C:\Vercel\node_modules\.pnpm\@anthropic-ai+sdk@0.71.2_zod@3.25.76\node_modules;C:\Vercel\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\bin\cli" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\bin\cli" %*
)
