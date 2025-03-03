from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

video_url = None


@app.route('/receive', methods=['POST'])
def receive():
    global video_url
    data = request.get_json()
    video_url = data.get('url')
    print("Received video:", video_url)
    return jsonify({"status": "Received"}), 200


@app.route('/')
def serve_video():
    global video_url
    if video_url:
        return f"""
        <html>
            <body>
                <iframe width="800" height="450" 
                    src="{video_url.replace('watch?v=', 'embed/')}" 
                    frameborder="0" allowfullscreen>
                </iframe>
            </body>
        </html>
        """
    return "No video received yet."


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
