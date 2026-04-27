# Agent Instructions for Poelang Kos

You are working on a Neo-Brutalist static website. Follow these rules strictly to maintain consistency.

## 1. Modularity
- **NEVER** hardcode the navbar or footer. Use the placeholders:
  ```html
  <div id="navbar-placeholder"></div>
  <div id="footer-placeholder"></div>
  <script src="assets/js/components.js"></script>
  ```
- All global styles belong in `assets/css/main.css`.

## 2. Aesthetics (Neo-Brutalism)
- **Borders**: Always use `border-4 border-black`.
- **Shadows**: Use `neo-shadow` (8px) or `neo-shadow-lg` (12px).
- **Icons**: Use Material Symbols Outlined. Always wrap them in a container that handles potential overflow.
- **Typography**: Headers should be `font-black italic uppercase`.

## 3. Infinite Marquee
- **NEVER** hardcode the marquee. Use the placeholder:
  ```html
  <div id="marquee-placeholder" data-room="01"></div>
  ```
- **Global Content**: Edit `GLOBAL_ADDRESS` in `assets/js/components.js` to change the address on all pages.
- **Custom Content**: Use `data-text` attribute for unique page content.

## 4. Centralized Pricing
- **NEVER** hardcode prices. Always use:
  ```html
  <span data-price-type="monthly"></span>
  ```
- **Control**: Edit `roomPrices` in `assets/js/pricing.js` to change rates globally.
- **Suffixes**: Use `data-price-suffix="false"` if you only want the number (e.g., inside a "Per Bulan" box).

## 5. Room Detail Pages & Gallery
- **Body Metadata**: Every room page must have `<body data-room-id="XX">`.
- **Photo Modal**: Ensure the `photoModal` HTML and the `openPhotoModal()` / `closePhotoModal()` functions are present.
- **Interactive Gallery**: The gallery should support swiping and keyboard arrows. It fetches images automatically from `assets/rooms/XX/`.
- **Template**: Use `room-01.html` as the base for all other rooms.
- **Home Carousel**: Room cards on the homepage use `room-carousel-track` with `data-room="XX"` for automatic image cycling.

## 6. Centralized Facilities
- **NEVER** hardcode the facilities list. Use:
  ```html
  <div id="facilities-grid"></div>
  ```
- **Control**: Edit `commonFacilities` and `roomBedTypes` in `assets/js/facilities.js` to change amenities globally or per room.
- **Icons**: Always use Material Symbols.
