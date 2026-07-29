let count = 0;

function updateClock() {
    document.getElementById("clock").innerHTML =
        new Date().toLocaleTimeString();
}

async function generateLoad() {

    try {

        await fetch("/api/load");

        count++;

        document.getElementById("counter").innerHTML = count;

    } catch (e) {
        console.log(e);
    }
}

updateClock();

setInterval(updateClock, 1000);

// Automatically hit the backend every second
setInterval(generateLoad, 1000);
