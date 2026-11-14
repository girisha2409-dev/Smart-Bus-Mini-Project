
let capacity = 40;
let passengers = 0;

function updateDashboard() {
    document.getElementById("passengers").textContent = passengers;
    document.getElementById("available").textContent =
        capacity - passengers;

    let status = "Available";

    if (passengers >= capacity) {
        status = "Full";
    } else if (passengers >= capacity * 0.75) {
        status = "Nearly Full";
    }

    document.getElementById("status").textContent = status;
}

function addPassenger() {
    if (passengers < capacity) {
        passengers++;
        updateDashboard();
    } else {
        alert("Bus is full!");
    }
}

function removePassenger() {
    if (passengers > 0) {
        passengers--;
        updateDashboard();
    } else {
        alert("No passengers to remove!");
    }
}

function resetBus() {
    passengers = 0;
    updateDashboard();
}

updateDashboard();
