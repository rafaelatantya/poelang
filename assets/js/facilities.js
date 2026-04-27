const roomBedTypes = {
    "01": "Queen Bed",
    "02": "Single Bed",
    "03": "Single Bed",
    "04": "King Bed",
    "05": "Single Bed",
    "06": "Single Bed",
    "07": "Single Bed",
    "08": "Queen Bed"
};

const commonFacilities = [
    { name: "WiFi Cepat", icon: "wifi" },
    { name: "Meja + Kursi", icon: "desk" },
    { name: "Dapur Bersama", icon: "kitchen" },
    { name: "4 K. Mandi Luar", icon: "bathroom" },
    { name: "CCTV 24/7", icon: "security" }
];

function updateFacilities() {
    const container = document.getElementById('facilities-grid');
    if (!container) return;

    const roomId = document.body.getAttribute('data-room-id');
    const bedType = roomBedTypes[roomId] || "Single Bed";

    // Build HTML
    let html = `
        <div class="bg-white border-4 border-black p-10 flex flex-col items-center gap-6 neo-shadow active-press text-center">
            <span class="material-symbols-outlined text-5xl">bed</span>
            <span class="font-black uppercase text-xs tracking-widest">${bedType} + Dipan</span>
        </div>
    `;

    commonFacilities.forEach(f => {
        html += `
            <div class="bg-white border-4 border-black p-10 flex flex-col items-center gap-6 neo-shadow active-press text-center">
                <span class="material-symbols-outlined text-5xl">${f.icon}</span>
                <span class="font-black uppercase text-xs tracking-widest">${f.name}</span>
            </div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', updateFacilities);
