let count = 0;
let requestInProgress = false;

function updateClock() {
    document.getElementById("clock").textContent =
        new Date().toLocaleTimeString();
}

async function generateLoad() {

    if (requestInProgress) {
        return;
    }

    requestInProgress = true;

    try {

        const response = await fetch("/api/load", {
            cache: "no-store"
        });

        if (response.ok) {
            count++;
            document.getElementById("counter").textContent = count;
        }

    } catch (e) {
        console.error(e);
    } finally {
        requestInProgress = false;
    }
}

updateClock();

// Update clock every second
setInterval(updateClock, 1000);

// Generate CPU load every 5 seconds
setInterval(generateLoad, 5000);

// Initial request
generateLoad();
