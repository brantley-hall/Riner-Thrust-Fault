# PowerShell script to optimize large images
# Uses ImageMagick for compression (if available)

$largeImages = @(
    "little-river-corridor-satellite.png",
    "meander-loops-aerial.png", 
    "usgs-gnulex-database-entry.png",
    "riner-quadrangle-annotated-map.png",
    "riner-quadrangle-six-faults-map.png"
)

Write-Host "Starting image optimization..." -ForegroundColor Green

foreach ($imageName in $largeImages) {
    $originalPath = "media\$imageName"
    $optimizedPath = "media\optimized_$imageName"
    
    if (Test-Path $originalPath) {
        $originalSize = (Get-Item $originalPath).Length
        Write-Host "Processing: $imageName ($([math]::Round($originalSize/1MB, 2)) MB)" -ForegroundColor Cyan
        
        # Try ImageMagick optimization if available
        try {
            # Compress with 85% quality and strip metadata
            magick convert "$originalPath" -quality 85 -strip "$optimizedPath"
            
            if (Test-Path $optimizedPath) {
                $optimizedSize = (Get-Item $optimizedPath).Length
                $reduction = ($originalSize - $optimizedSize) / $originalSize * 100
                Write-Host "  Optimized: $([math]::Round($optimizedSize/1MB, 2)) MB ($([math]::Round($reduction, 1))% reduction)" -ForegroundColor Green
            }
        } catch {
            Write-Host "  ImageMagick not available, skipping optimization" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  File not found: $imageName" -ForegroundColor Red
    }
}

Write-Host "Image optimization complete!" -ForegroundColor Green
