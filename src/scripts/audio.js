document.addEventListener("DOMContentLoaded", () => {
    const playIcon = document.querySelector(".play-icon");
    const pauseIcon = document.querySelector(".pause-icon");

    function toggleAudioIcons() {
        const isPlaying = playIcon.style.display === "none";

        if (isPlaying) {
            playIcon.style.display = "block";
            pauseIcon.style.display = "none";
            // pause audio here

        } else {
            playIcon.style.display = "none";
            pauseIcon.style.display = "block";
            // play audio here
            
        }
    }

    playIcon.addEventListener("click", toggleAudioIcons);
    pauseIcon.addEventListener("click", toggleAudioIcons);
});