# 🚀 YouTube Ad Blocker - Custom Embedded Player

This project provides a simple, self-hosted solution to block ads on YouTube by embedding videos in a locally hosted player. It consists of:

- A **browser extension** that detects YouTube video links and redirects them to the embedded player.
- A **local Flask server** that hosts and plays the video without ads.

---

## 📌 Features

✅ **Ad-Free YouTube Videos** - Watch videos without interruptions.  
✅ **Privacy-Focused** - No third-party extensions tracking your data.  
✅ **Lightweight & Fast** - Minimal setup, just a few lines of code.  
✅ **Runs Locally** - No external dependencies or API calls.  

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```shell
git clone https://github.com/yourusername/youtube-adblocker.git
cd youtube-adblocker/server
```

### 2️⃣ Install Dependencies
You have two options to set up the local server: **manual installation** or **Docker**.

#### 🔹 Option 1: Manual Installation (Python)
Ensure you have Python installed, then run:
```shell
pip install flask flask-cors
```

#### 🔹 Option 2: Using Docker and Make
If you prefer using Docker, you can build and run the server in a container.
To build the server side code. Docker must be running.
```shell
make build
```
To run the server


### 3️⃣ Start the Local Server
#### 🔹 Option 1: If using Python manually, run:
```shell
python server.py
```
#### 🔹 Option 2: Using Docker and Make
```shell
make run
```

By default, the server runs on `http://localhost:5000`.

If using Docker, the server will already be running in the container.

### 4️⃣ Load the Browser Extension
1. Open your browser and go to `chrome://extensions/` (or Edge's equivalent).  
2. Enable **Developer Mode** (top-right corner).  
3. Click **Load Unpacked** and select the `extension/` folder.  
4. The extension is now active! 🎉

---

## 🚀 Usage
1. Open any YouTube video.  
2. The extension detects the link, closes the tab, and opens the ad-free embedded player.  
3. Enjoy a seamless, uninterrupted viewing experience! 🎥
4. Other features like like, subscribe, comments, and related video's are not present.

---

## 📝 How It Works
- The **browser extension** listens for YouTube video links.
- When a video is opened, it automatically redirects it to the **localhost server**.
- The **Flask server** embeds the video that comes without ads and serves it locally.

Since **YouTube doesn’t display ads on embedded videos**, this trick effectively blocks them. 🚀

---

## ❓ FAQ
### 🔹 Can I use this on any browser?
The extension is designed for **Chromium-based browsers** (Chrome, Edge, Brave, etc.).

### 🔹 Does this violate YouTube’s policies?
This project is for **educational purposes only**. Use at your own discretion.

### 🔹 Will this work forever?
YouTube updates its platform frequently. While this method works now, it may require future tweaks.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Contributing
Feel free to **fork** this repository, submit **pull requests**, or open **issues** for improvements. Let’s make it even better! 🚀

---

## 🎉 Acknowledgments
Special thanks to the **open-source community** for making learning and innovation possible! ❤️
