const express = require("express");
const crypto = require("crypto");

const app = express();
const PORT = 80;

app.use(express.static("public"));

let requestCount = 0;

app.get("/api/ping", (req, res) => {

    requestCount++;

    // Small CPU workload (~50k SHA256 hashes)
    for (let i = 0; i < 50000; i++) {
        crypto.createHash("sha256")
            .update(`${Date.now()}-${i}`)
            .digest("hex");
    }

    res.json({
        status: "OK",
        requests: requestCount,
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
