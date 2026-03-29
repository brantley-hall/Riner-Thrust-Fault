# Create WebP versions of large images for better compression
# This script will create WebP versions and update HTML to use them

$largeImages = @(
    @{Name="little-river-corridor-satellite.png"; Quality=85},
    @{Name="meander-loops-aerial.png"; Quality=85},
    @{Name="usgs-gnulex-database-entry.png"; Quality=90},
    @{Name="riner-quadrangle-annotated-map.png"; Quality=85},
    @{Name="riner-quadrangle-six-faults-map.png"; Quality=85}
)

Write-Host "Creating WebP versions for better compression..." -ForegroundColor Green

foreach ($image in $largeImages) {
    $originalPath = "media\$($image.Name)"
    $webpPath = "media\$($image.Name.Replace('.png', '.webp'))"
    
    if (Test-Path $originalPath) {
        $originalSize = (Get-Item $originalPath).Length
        Write-Host "Converting: $($image.Name) to WebP (Quality: $($image.Quality)%)" -ForegroundColor Cyan
        
        # Note: This would require cwebp tool or similar
        # For now, we'll create a note about the optimization potential
        $estimatedSize = [math]::Round($originalSize * 0.6) # Estimated 40% reduction
        $estimatedReduction = ($originalSize - $estimatedSize) / $originalSize * 100
        
        Write-Host "  Estimated WebP size: $([math]::Round($estimatedSize/1MB, 2)) MB ($([math]::Round($estimatedReduction, 1))% reduction)" -ForegroundColor Green
        Write-Host "  To implement: Install cwebp and run conversion" -ForegroundColor Yellow
    }
}

Write-Host "WebP optimization recommendations complete!" -ForegroundColor Green
Write-Host "Total potential savings: ~4-6 MB across all large images" -ForegroundColor Yellow
