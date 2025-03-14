document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("registration-modal");
    const closeModal = document.querySelector(".close-btn");

    // Open modal
    document.querySelectorAll(".register-btn").forEach(button => {
        button.addEventListener("click", function () {
            const eventTitle = this.dataset.eventTitle;
            document.getElementById("reg-event-name").value = eventTitle;
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Handle Registration Form Submission
    document.getElementById("registration-form").addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = {
            event: document.getElementById("reg-event-name").value,
            name: document.getElementById("reg-name").value,
            email: document.getElementById("reg-email").value,
            phone: document.getElementById("reg-phone").value,
            ticketType: document.getElementById("reg-ticket-type").value,
            quantity: document.getElementById("reg-quantity").value,
            requirements: document.getElementById("reg-requirements").value
        };

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            alert(result.message);

            modal.style.display = "none";
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
let registrations = [];
let events = [
    { id: 1, title: "Tech Conference", date: "2025-04-15", location: "New York", capacity: 200 },
    { id: 2, title: "Marketing Summit", date: "2025-06-20", location: "Los Angeles", capacity: 150 }
];

// Get all events
app.get("/events", (req, res) => {
    res.json(events);
});

// Register for an event
app.post("/register", (req, res) => {
    const { event, name, email, phone, ticketType, quantity, requirements } = req.body;

    if (!event || !name || !email || !phone || !ticketType || !quantity) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const registration = {
        id: registrations.length + 1,
        event,
        name,
        email,
        phone,
        ticketType,
        quantity,
        requirements,
        status: "Pending"
    };

    registrations.push(registration);
    res.json({ message: "Registration successful!", registration });
});

// Get all registrations
app.get("/registrations", (req, res) => {
    res.json(registrations);
});

// Update registration status
app.put("/registrations/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const registration = registrations.find(r => r.id == id);
    if (!registration) {
        return res.status(404).json({ message: "Registration not found." });
    }

    registration.status = status;
    res.json({ message: "Registration updated!", registration });
});

// Delete a registration
app.delete("/registrations/:id", (req, res) => {
    const { id } = req.params;
    registrations = registrations.filter(r => r.id != id);
    res.json({ message: "Registration deleted." });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

