@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules\@modelcontextprotocol\server-filesystem\dist\node_modules;C:\Vercel\node_modules\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules\@modelcontextprotocol\server-filesystem\node_modules;C:\Vercel\node_modules\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules\@modelcontextprotocol\node_modules;C:\Vercel\node_modules\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules;C:\Vercel\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Vercel\node_modules\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules\@modelcontextprotocol\server-filesystem\dist\node_modules;C:\Vercel\node_modules\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules\@modelcontextprotocol\server-filesystem\node_modules;C:\Vercel\node_modules\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules\@modelcontextprotocol\node_modules;C:\Vercel\node_modules\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules;C:\Vercel\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules\@modelcontextprotocol\server-filesystem\dist\index.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\.pnpm\@modelcontextprotocol+serve_013a63ca059848fb0d4d2cbca875150c\node_modules\@modelcontextprotocol\server-filesystem\dist\index.js" %*
)
