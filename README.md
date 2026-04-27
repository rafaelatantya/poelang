# Poelang Kos Website

Static website for Poelang Kos in Yogyakarta. Built with Neo-Brutalism aesthetics using Tailwind CSS and Vanilla JS.

## Architecture

This project uses a **Modular Component Pattern** for a static site.

### Folders
- `/assets`: Static assets.
  - `/css/main.css`: Core design system, infinite marquee logic, and Neo-Brutalism utilities.
  - `/js/components.js`: Script to dynamically load shared HTML components.
  - `/js/pricing.js`: Centralized pricing engine that calculates 1D, 1W, and 2W rates from a single monthly variable.
  - `/js/facilities.js`: Centralized facilities manager to unify amenities across all room pages.
  - `/js/typewriter.js`: Hero section typewriter animation with natural randomness.
  - `/rooms`: Subfolders `01-08` containing images for each room.
- `/components`: Shared HTML snippets (Navbar, Footer, Mobile Nav, etc.).
- `/skills`: Scripts and instructions for common tasks.

### Centralized Pricing System
To update prices across the entire website, edit the `roomPrices` object in `assets/js/pricing.js`.
- **Automatic Calculations**: The script automatically calculates Daily, Weekly, and 2-Weekly rates using custom formulas.
- **Auto-Formatting**: Automatically formats large numbers (e.g., `1200000` -> `Rp 1.2jt`).

### Centralized Facilities Management
All room amenities are managed from `assets/js/facilities.js`.
- **Global Amenities**: Change `commonFacilities` to update the list for all rooms at once.
- **Bed Types**: Specify `roomBedTypes` (Single/Queen/King) per room ID.
- **Icons**: Automatically uses Material Symbols based on the configuration.

### Full-Screen Photo Gallery
All room pages include a "LIHAT FULL FOTO" feature:
- **Lightbox**: Opens a high-resolution swipeable gallery.
- **Dynamic Loading**: Automatically detects and loads all images (`1.png`, `2.png`, etc.) found in the room's folder.

## Design System (Neo-Brutalism)
- **Colors**: Primary (#FFD600), Secondary (#FF4B2B), Black (#000000), White (#FFFFFF).
- **Shadows**: 8px (neo-shadow), 12px (neo-shadow-lg).
- **Borders**: 4px black borders on everything.
- **Typography**: Epilogue / Inter (Black Italic for headers).
