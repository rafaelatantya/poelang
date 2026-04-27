# Skill: Adding a New Room Page (v2 Modular)

Follow these steps to add a new room consistently using the redesigned layout.

1. **Asset Preparation**:
   - Create folder `assets/rooms/XX`.
   - Add images as `1.png`, `2.png`, etc.

2. **File Creation**:
   - Copy `room-01.html` to `room-XX.html`.
   - **Body Metadata**: Set `<body data-room-id="XX">`.
   - **Marquee**: Set `<div id="marquee-placeholder" data-room="XX"></div>`.
   - **Script**: Update `const roomId = 'XX';` in the internal script for the gallery.
   - **Sidebar**: Update dimensions (4x4m, etc.) and specific room number.

3. **Global Configuration**:
   - **Pricing**: Add the price to `assets/js/pricing.js` in the `roomPrices` object.
   - **Facilities**: Add the bed type to `assets/js/facilities.js` in the `roomBedTypes` object.

4. **Linking**:
   - Add the new room card to `index.html`.
   - Set `data-room="XX"` on the `<article>` tag.
   - Ensure the image `src` points to `assets/rooms/XX/1.png`.

## Pro-Tip: Facilities & Pricing
You no longer need to edit the pricing table or facilities grid in the HTML. The scripts in `pricing.js` and `facilities.js` will automatically populate the placeholders based on the `data-room-id` on the `<body>` tag.
