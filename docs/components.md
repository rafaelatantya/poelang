# Documentation: Modular Component System (v3.0 - Adaptive Edition)

The Poelang website uses a lightweight component loading system powered by `assets/js/components.js`. This allows for a modular, maintainable architecture without a complex build step.

## 1. Global Placeholders

Each page (`index.html`, `room-XX.html`, `about.html`) must contain these placeholders:

```html
<!-- Placeholders at the start/end of <body> -->
<div id="navbar-placeholder"></div>
<div id="marquee-placeholder"></div>

<!-- Placeholders for mobile-specific navigation -->
<div id="mobile-nav-placeholder"></div>
<div id="fab-placeholder"></div>

<!-- Footer placeholder -->
<div id="footer-placeholder"></div>

<!-- Required JS Loader -->
<script src="assets/js/components.js"></script>
```

## 2. Component Reference

### Navbar (`components/navbar.html`)
- **Adaptive Design**: Centered `@YOGYAKARTA` text, left-aligned logo, and right-aligned "KONTAK" button.
- **Sticky**: Stays at the top of the viewport.

### Footer (`components/footer.html`)
- Contains copyright, social links, and a direct Google Maps link.
- No longer includes the "Testimonial" section (moved to homepage).

### Marquee (`assets/js/components.js`)
The marquee is dynamically generated based on data attributes:
- `data-room="01"`: Appends " • KAMAR 01 READY •" to the text.
- `data-text="CUSTOM TEXT"`: Overwrites the default text.
- **Auto-Repeat**: The script repeats the text 4x to ensure a continuous loop.

### Mobile Navigation (`components/mobile-nav.html`)
- **Visibility**: Hidden on desktop (`md:hidden`), visible on mobile.
- **Links**: Home, Maps, Profile, and Info.

### Floating Action Button (`components/fab.html`)
- **"Tanya Admin"**: Fixed button at the bottom-right for quick WhatsApp access.
- **Adaptive**: Wider on mobile, compact on desktop.

### Pricing Engine (`assets/js/pricing.js`)
Handles all pricing logic for the site:
- **`roomPrices` Object**: The single source of truth for all room rates.
- **`data-price-type`**: Attribute to specify which rate to display (`monthly`, `weekly`, `twoWeeks`, `daily`).
- **`data-price-suffix="false"`**: Optional attribute to hide the "/bulan" or "/hari" suffix.
- **Placeholders**: Any element with these attributes will be automatically populated on page load.

### Facilities Manager (`assets/js/facilities.js`)
Centralizes room amenities:
- **`commonFacilities`**: List of amenities shared by all rooms.
- **`roomBedTypes`**: Mapping of room IDs to their specific bed configuration (Single/Queen/King).
- **`#facilities-grid`**: Placeholder populated on page load.

## 3. Synchronizing Room Pages

To update all 8 room pages after a template change:
1.  Modify `room-01.html` (the master template).
2.  Add specific room metadata:
    - `<body data-room-id="01">`
    - `<div id="marquee-placeholder" data-room="01"></div>`
3.  Ensure `assets/js/pricing.js` and `assets/js/components.js` are included in the `<head>`.

## 4. Visual Assets
- **Logo/Owner Image**: Located at `assets/owner.png`.
- **Room Images**: Organized by folder `assets/rooms/XX/`. Images should be named sequentially (`1.png`, `2.png`, etc.).
- **Icons**: Uses [Google Material Symbols](https://fonts.google.com/icons).
