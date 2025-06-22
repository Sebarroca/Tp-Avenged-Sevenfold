function toggleLyrics(id) {
    const lyrics = document.getElementById(id);
    if (lyrics.style.display === "none" || lyrics.style.display === "") {
        lyrics.style.display = "block";
    } else {
        lyrics.style.display = "none";
    }
}