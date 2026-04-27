const roomPrices = {
    "01": 500000,
    "02": 600000,
    "03": 700000,
    "04": 750000,
    "05": 800000,
    "06": 850000,
    "07": 900000,
    "08": 1000000
};

function formatPrice(amount) {
    if (amount >= 1000000) {
        const millions = amount / 1000000;
        // Exact format: Rp 1.2jt (with space as requested)
        return `Rp ${millions % 1 === 0 ? millions : millions.toFixed(1)}jt`;
    } else {
        const thousands = Math.round(amount / 1000);
        return `Rp ${thousands}rb`;
    }
}

function calculatePrices(monthly) {
    return {
        monthly: monthly,
        twoWeeks: (monthly / 30) * 14 * 1.25,
        weekly: (monthly / 30) * 7 * 1.5,
        daily: (monthly / 30) * 1 * 3
    };
}

function updateAllPrices() {
    // Update elements with data-room and data-price-type
    document.querySelectorAll('[data-room]').forEach(container => {
        const roomId = container.getAttribute('data-room');
        const monthlyPrice = roomPrices[roomId];
        if (!monthlyPrice) return;

        const prices = calculatePrices(monthlyPrice);

        container.querySelectorAll('[data-price-type]').forEach(el => {
            const type = el.getAttribute('data-price-type');
            const showSuffix = el.getAttribute('data-price-suffix') !== 'false';

            let suffix = "";
            if (showSuffix) {
                if (type === 'monthly') suffix = "/bulan";
                if (type === 'twoWeeks') suffix = "/2 minggu";
                if (type === 'weekly') suffix = "/minggu";
                if (type === 'daily') suffix = "/hari";
            }

            el.innerText = `${formatPrice(prices[type])}${suffix}`;
        });
    });

    // Support for single room pages (room-XX.html)
    const bodyRoomId = document.body.getAttribute('data-room-id');
    if (bodyRoomId && roomPrices[bodyRoomId]) {
        const monthlyPrice = roomPrices[bodyRoomId];
        const prices = calculatePrices(monthlyPrice);

        document.querySelectorAll('[data-price-type]').forEach(el => {
            const type = el.getAttribute('data-price-type');
            const showSuffix = el.getAttribute('data-price-suffix') !== 'false';

            let suffix = "";
            if (showSuffix) {
                if (type === 'monthly') suffix = "/bulan";
                if (type === 'twoWeeks') suffix = "/2 minggu";
                if (type === 'weekly') suffix = "/minggu";
                if (type === 'daily') suffix = "/hari";
            }

            el.innerText = `${formatPrice(prices[type])}${suffix}`;
        });
    }
}

document.addEventListener('DOMContentLoaded', updateAllPrices);
