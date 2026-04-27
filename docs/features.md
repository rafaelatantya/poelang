# Poelang Kos - Features Documentation

This document outlines the current and planned features for the Poelang Kos website.

## Current Features

### 1. Neo-Brutalism UI/UX
- **Custom Tailwind Config**: Tailored colors and spacing for the Neo-Brutalism look.
- **Micro-Animations**: Hover effects on cards and buttons.
- **Marquee Announcement**: Dynamic scrolling text for important updates.
- **Typewriter Effect**: Hero section animation with descriptive words (Nyaman, Murah, Reliable).

### 2. Room Listing & Auto-Scroll
- **Automatic Preview**: Homepage cards auto-scroll through available room photos every 1.5s with a smooth swipe animation.
- **Dynamic Card Links**: The entire card is clickable for convenience, leading directly to the room page.
- **Multi-Duration Rates**: Cards show 1D, 1W, and 2W rates automatically calculated from the monthly price.

### 3. Centralized Pricing System
- **Single Variable**: Change the price once in `pricing.js` to update the whole site.
- **Auto-Calculations**: Formula-based pricing for shorter durations.
- **Natural Language Parsing**: Prices are formatted as "Rp 1.2jt/bulan" or "Rp 200rb/hari" automatically.

### 4. Centralized Facilities Management
- **Universal Amenities**: Update once in `facilities.js` to refresh all room pages.
- **Per-Room Customization**: Handles different bed types (Single/Queen/King) while keeping other amenities synced.
- **Icon Integration**: Automatically renders Material Symbols based on amenity names.

### 5. Interactive Gallery
- **Full-Screen Lightbox**: High-res, swipeable photo modal for all room images.
- **Touch-Optimized**: Supports swipe gestures on mobile and keyboard navigation on desktop.

### 5. Information Sections
- **Rules**: Bold display of boarding house rules.
- **Facilities**: Grid layout of available facilities with Material Symbols.
- **Location**: Hero section with address and location icon.

## Planned Features

### 1. Booking Integration
- Integration with WhatsApp or a simple form for direct booking inquiries.

### 2. Multi-Language Support
- Switching between Bahasa Indonesia and English.

### 3. Reviews Section
- Customer testimonials in Neo-Brutalism style.
