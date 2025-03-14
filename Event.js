// Sample event data - in a real application, this would come from a database
const events = [
    {
        id: 1,
        title: "Tech Conference 2025",
        shortDescription: "The biggest tech conference of the year",
        fullDescription: "Join us for three days of inspiring talks, hands-on workshops, and networking opportunities with the brightest minds in the tech industry. This year's focus is on AI, blockchain, and sustainable technology.",
        date: "April 15-17, 2025",
        time: "9:00 AM - 6:00 PM",
        location: "Convention Center, New York",
        locationDetails: "123 Main St, New York, NY 10001",
        image: "/api/placeholder/800/500",
        capacity: 500,
        registered: 342,
        price: "$299",
        category: "Technology",
        speakers: [
            { name: "John Smith", title: "AI Researcher at TechCorp", bio: "Leading expert in machine learning and neural networks", avatar: "/api/placeholder/100/100" },
            { name: "Sarah Johnson", title: "CEO of FutureTech", bio: "Visionary leader in sustainable technology", avatar: "/api/placeholder/100/100" },
            { name: "Michael Chen", title: "Blockchain Developer", bio: "Pioneer in decentralized finance applications", avatar: "/api/placeholder/100/100" }
        ],
        agenda: [
            { time: "9:00 AM", title: "Registration & Breakfast", description: "Pick up your badge and enjoy a networking breakfast" },
            { time: "10:00 AM", title: "Keynote: The Future of AI", description: "By Sarah Johnson, CEO of FutureTech" },
            { time: "11:30 AM", title: "Panel Discussion: Ethical AI", description: "Industry experts discuss the ethical implications of AI" },
            { time: "1:00 PM", title: "Lunch Break", description: "Networking lunch in the main hall" },
            { time: "2:00 PM", title: "Workshop: Building Your First Blockchain App", description: "Hands-on session with Michael Chen" }
        ],
        tickets: [
            { name: "Early Bird", price: "$199", description: "Limited availability, ends March 1st", capacity: 100, sold: 100 },
            { name: "Regular", price: "$299", description: "General admission", capacity: 300, sold: 200 },
            { name: "VIP", price: "$499", description: "Includes exclusive sessions and dinner", capacity: 100, sold: 42 }
        ]
    },
    {
        id: 2,
        title: "Digital Marketing Summit",
        shortDescription: "Learn the latest digital marketing strategies",
        fullDescription: "The Digital Marketing Summit brings together marketing professionals to share insights on the latest trends, tools, and strategies. From SEO to social media marketing, this event covers everything you need to know to stay ahead in the digital marketing landscape.",
        date: "May 10, 2025",
        time: "10:00 AM - 5:00 PM",
        location: "Marriott Hotel, Chicago",
        locationDetails: "540 N Michigan Ave, Chicago, IL 60611",
        image: "/api/placeholder/800/500",
        capacity: 300,
        registered: 158,
        price: "$199",
        category: "Marketing",
        speakers: [
            { name: "Emily Davis", title: "Marketing Director at SocialBoost", bio: "Expert in social media strategy and influencer marketing", avatar: "/api/placeholder/100/100" },
            { name: "Robert Jones", title: "SEO Consultant", bio: "Helping businesses improve their search rankings for over 15 years", avatar: "/api/placeholder/100/100" }
        ],
        agenda: [
            { time: "10:00 AM", title: "Welcome & Introduction", description: "Opening remarks and agenda overview" },
            { time: "10:30 AM", title: "SEO in 2025: What's Changed?", description: "By Robert Jones, SEO Consultant" },
            { time: "12:00 PM", title: "Lunch Break", description: "Networking opportunity" },
            { time: "1:00 PM", title: "Influencer Marketing Strategies", description: "By Emily Davis, Marketing Director at SocialBoost" },
            { time: "3:00 PM", title: "Workshop: Creating Viral Content", description: "Interactive session on content creation" }
        ],
        tickets: [
            { name: "Standard", price: "$199", description: "Full day access", capacity: 250, sold: 140 },
            { name: "Premium", price: "$349", description: "Includes one-on-one consultation", capacity: 50, sold: 18 }
        ]
    },
    {
        id: 3,
        title: "Wellness & Mindfulness Retreat",
        shortDescription: "A day of relaxation and self-improvement",
        fullDescription: "Step away from your busy life and join us for a day focused on wellness, mindfulness, and personal growth. This retreat features yoga sessions, meditation workshops, nutrition talks, and stress management techniques led by experienced wellness practitioners.",
        date: "June 5, 2025",
        time: "8:00 AM - 4:00 PM",
        location: "Serenity Gardens, San Francisco",
        locationDetails: "1234 Peaceful Lane, San Francisco, CA 94110",
        image: "/api/placeholder/800/500",
        capacity: 100,
        registered: 67,
        price: "$149",
        category: "Health",
        speakers: [
            { name: "Lisa Wong", title: "Certified Yoga Instructor", bio: "Teaching yoga and mindfulness for over 10 years", avatar: "/api/placeholder/100/100" },
            { name: "David Miller", title: "Nutritionist", bio: "Specializing in holistic nutrition and wellness", avatar: "/api/placeholder/100/100" }
        ],
        agenda: [
            { time: "8:00 AM", title: "Morning Yoga", description: "Gentle yoga session to start the day" },
            { time: "9:30 AM", title: "Meditation Workshop", description: "Learn meditation techniques for daily practice" },
            { time: "11:00 AM", title: "Nutrition Talk", description: "Healthy eating for mind and body" },
            { time: "12:30 PM", title: "Lunch", description: "Organic, plant-based lunch provided" },
            { time: "2:00 PM", title: "Stress Management", description: "Techniques for reducing stress in daily life" }
        ],
        tickets: [
            { name: "Individual", price: "$149", description: "Single participant", capacity: 80, sold: 55 },
            { name: "Couples", price: "$249", description: "Bring a partner or friend", capacity: 20, sold: 12 }
        ]
    }
];

// DOM Elements
const eventListSection = document.getElementById('event-list-section');
const eventDetailsSection = document.getElementById('event-details-section');
const eventList = document.querySelector('.event-list');
const backToEventsBtn = document.getElementById('back-to-events');

// Event Detail Elements
const eventDetailImg = document.getElementById('event-detail-img');
const eventDetailTitle = document.getElementById('event-detail-title');
const eventDetailShortDesc = document.getElementById('event-detail-short-desc');
const eventDetailDate = document.getElementById('event-detail-date');
const eventDetailTime = document.getElementById('event-detail-time');
const eventDetailLocation = document.getElementById('event-detail-location');
const eventDetailCapacity = document.getElementById('event-detail-capacity');
const eventDetailPrice = document.getElementById('event-detail-price');

// Create registration modal elements
const modal = document.createElement('div');
modal.className = 'modal';
modal.id = 'registration-modal';
modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>Event Registration</h2>
            <button class="close-btn">&times;</button>
        </div>
        <div class="registration-form">
            <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" id="reg-name" required>
            </div>
            <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-control" id="reg-email" required>
            </div>
            <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="reg-phone" required>
            </div>
            <div class="form-group">
                <label class="form-label">Ticket Type</label>
                <select class="form-control" id="reg-ticket-type">
                    <!-- Ticket options will be added dynamically -->
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Quantity</label>
                <input type="number" class="form-control" id="reg-quantity" min="1" max="10" value="1">
            </div>
            <div class="form-group">
                <label class="form-label">Special Requirements</label>
                <textarea class="form-control" id="reg-requirements" rows="3"></textarea>
            </div>
            <button class="btn btn-success" id="submit-registration">Complete Registration</button>
        </div>
    </div>
`;
document.body.appendChild(modal);

// Initialize the application
function initApp() {
    displayEvents();
    setupEventListeners();
}

// Display all events
function displayEvents() {
    eventList.innerHTML = '';
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-details">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-info">
                    <p>📅 ${event.date}</p>
                    <p>📍 ${event.location}</p>
                </div>
                <p class="event-description">${event.shortDescription}</p>
                <div class="event-actions">
                    <button class="btn view-details" data-id="${event.id}">View Details</button>
                    <button class="btn btn-success register-now" data-id="${event.id}">Register Now</button>
                </div>
            </div>
        `;
        eventList.appendChild(eventCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // View details button clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-details')) {
            const eventId = parseInt(e.target.getAttribute('data-id'));
            showEventDetails(eventId);
        }
        
        if (e.target.classList.contains('register-now')) {
            const eventId = parseInt(e.target.getAttribute('data-id'));
            openRegistrationModal(eventId);
        }
    });
    
    // Back to events button
    backToEventsBtn.addEventListener('click', function() {
        eventDetailsSection.style.display = 'none';
        eventListSection.style.display = 'block';
    });
    
    // Tab functionality for event details
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('event-tab')) {
            const tabName = e.target.getAttribute('data-tab');
            activateTab(tabName);
        }
    });
    
    // Close modal button
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('registration-modal').style.display = 'none';
    });
    
    // Click outside modal to close
    window.addEventListener('click', function(e) {
        if (e.target === document.getElementById('registration-modal')) {
            document.getElementById('registration-modal').style.display = 'none';
        }
    });
    
    // Submit registration form
    document.getElementById('submit-registration').addEventListener('click', function() {
        submitRegistration();
    });
}

// Show event details
function showEventDetails(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    // Update the event details page with the event information
    eventDetailImg.src = event.image;
    eventDetailTitle.textContent = event.title;
    eventDetailShortDesc.textContent = event.shortDescription;
    eventDetailDate.textContent = event.date;
    eventDetailTime.textContent = event.time;
    eventDetailLocation.textContent = event.location;
    eventDetailCapacity.textContent = `${event.registered}/${event.capacity} Registered`;
    eventDetailPrice.textContent = `Starting at ${event.price}`;
    
    // Update tab contents
    updateTabContents(event);
    
    // Switch to the event details view
    eventListSection.style.display = 'none';
    eventDetailsSection.style.display = 'block';
    
    // Activate the description tab by default
    activateTab('description');
}

// Update the tab contents for an event
function updateTabContents(event) {
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Remove any existing tab content
    tabContents.forEach(content => content.remove());
    
    // Create new tab contents
    createDescriptionTab(event);
    createAgendaTab(event);
    createSpeakersTab(event);
    createLocationTab(event);
    createTicketsTab(event);
}

// Create the description tab content
function createDescriptionTab(event) {
    const descriptionTab = document.createElement('div');
    descriptionTab.className = 'tab-content active';
    descriptionTab.id = 'description-tab';
    descriptionTab.innerHTML = `
        <h3>About This Event</h3>
        <p>${event.fullDescription}</p>
        <div class="event-stats">
            <h4>Event Details</h4>
            <p><strong>Category:</strong> ${event.category}</p>
            <p><strong>Capacity:</strong> ${event.capacity} attendees</p>
            <p><strong>Currently Registered:</strong> ${event.registered} attendees</p>
        </div>
    `;
    document.querySelector('.event-details-content').appendChild(descriptionTab);
}

// Create the agenda tab content
function createAgendaTab(event) {
    const agendaTab = document.createElement('div');
    agendaTab.className = 'tab-content';
    agendaTab.id = 'agenda-tab';
    
    let agendaHTML = '<h3>Event Schedule</h3>';
    
    event.agenda.forEach(item => {
        agendaHTML += `
            <div class="agenda-item">
                <div class="agenda-time">${item.time}</div>
                <div class="agenda-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    });
    
    agendaTab.innerHTML = agendaHTML;
    document.querySelector('.event-details-content').appendChild(agendaTab);
}

// Create the speakers tab content
function createSpeakersTab(event) {
    const speakersTab = document.createElement('div');
    speakersTab.className = 'tab-content';
    speakersTab.id = 'speakers-tab';
    
    let speakersHTML = '<h3>Event Speakers</h3>';
    
}