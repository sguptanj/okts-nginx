from flask import Flask
from load import generate_cpu_load
import time

app = Flask(__name__)

@app.route("/api/load")
def load():

    generate_cpu_load(0.8)

    return {
        "status": "success",
        "timestamp": time.time()
    }

@app.route("/api/health")
def health():
    return {"status": "UP"}
