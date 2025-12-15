$configPath = "C:\Users\conta\.gemini\gcloud_persistent_config"

# Create the directory if it doesn't exist
if (-not (Test-Path -Path $configPath)) {
    New-Item -ItemType Directory -Path $configPath -Force | Out-Null
    Write-Host "Created persistent config directory at $configPath" -ForegroundColor Green
}

# Set the environment variable for the current session
$env:CLOUDSDK_CONFIG = $configPath

# Persist it for future sessions (User scope)
[System.Environment]::SetEnvironmentVariable('CLOUDSDK_CONFIG', $configPath, [System.EnvironmentVariableTarget]::User)

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "Google Cloud Auth Persistence Fix Applied" -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "1. Configuration path set to: $configPath"
Write-Host "2. Please run 'gcloud auth login' NOW to save your credentials permanently."
Write-Host "3. Future terminals will automatically use this location."
Write-Host "==================================================" -ForegroundColor Cyan
