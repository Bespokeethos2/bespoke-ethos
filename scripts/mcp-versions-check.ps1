$versions = @(
  'mcp-remote@0.1.37',
  'exa-mcp-server@3.1.3',
  '@modelcontextprotocol/server-filesystem@2025.12.18',
  '@modelcontextprotocol/server-memory@2025.11.25',
  '@modelcontextprotocol/server-github@2025.4.8',
  '@modelcontextprotocol/server-postgres@0.6.2'
)

Write-Output 'Pinned MCP versions:'
$versions | ForEach-Object { "- $($_)" }
exit 0