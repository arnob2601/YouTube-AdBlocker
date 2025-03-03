function pauseAndSendVideo() {
    let video = document.querySelector("video");
    if (video) {
        video.pause();
        console.log("YouTube video paused.");
    }

    // Get the current video URL
    let videoUrl = window.location.href;
    console.log("Sending video URL:", videoUrl);

    // Send URL to background script
    chrome.runtime.sendMessage({ action: "sendVideoUrl", url: videoUrl });
}

// Run when the page loads
window.addEventListener("load", pauseAndSendVideo);
setTimeout(pauseAndSendVideo, 1000); // Retry in case the video loads late
