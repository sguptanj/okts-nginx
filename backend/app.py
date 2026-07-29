from flask import Flask
from load import generate_cpu_load
import time

app = Flask(__name__)

@app.route("/api/load")
def load():

    # Small CPU burst (~200 ms)
    generate_cpu_load(.02)

    return {
        "status": "ok",
        "timestamp": time.time()
    }

@app.route("/health")
def health():
    return "OK"

if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        threaded=False,
        debug=False
    )
