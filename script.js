// ===== Profile Data =====
const profileData = {
    name: "Jane Doe",
    bio: "Frontend developer passionate about accessible web design and creating beautiful, responsive user experiences. Always learning and exploring new technologies.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    socialLinks: [
        { name: "twitter", url: "https://twitter.com", label: "𝕏 Twitter" },
        { name: "github", url: "https://github.com", label: "GitHub" },
        { name: "linkedin", url: "https://linkedin.com", label: "LinkedIn" }
    ],
    hobbies: ["🎨 Web Design", "📸 Photography", "🎮 Gaming", "🌍 Traveling"],
    dislikes: ["❌ Inaccessible websites", "❌ Poor UX design", "❌ Spam emails", "❌ Slow loading times"]
};

// ===== DOM Element Cache =====
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// ===== Time Update Function =====
function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = currentTime;
}

// ===== Initialization =====
function initialize() {
    // Set initial time
    updateTime();
}

// Initialize on page load
initialize();

// ===== Update Time Every 500ms =====
setInterval(updateTime, 500);
