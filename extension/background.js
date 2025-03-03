chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("youtube.com/watch")) {
        console.log("Detected YouTube video:", tab.url);

        // Send video URL to the Flask server
        fetch("http://localhost:5000/receive", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: tab.url })
        })
        .then(() => {
            // Close the YouTube tab
            chrome.tabs.remove(tabId, () => console.log("YouTube tab closed."));

            // Open the embedded player on localhost
            chrome.tabs.create({ url: "http://localhost:5000/" });
        })
        .catch(error => console.error("Error sending request:", error));
    }
});
