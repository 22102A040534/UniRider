#🚗 UniRiders – Smart Campus Transportation

UniRiders is a web-based smart transport solution designed for Mohan Babu University. It connects students and drivers for safe, affordable, and intelligent auto-rickshaw sharing, with features like real-time ride booking, SOS alerts, dynamic fare estimation, chatbot assistance, and live navigation.

🌟 Features

Student Module → Request rides, estimate fares, track drivers live.

Driver Module → Accept ride requests, update status, share live location.

Admin Dashboard → Monitor live rides and manage Emergency SOS alerts (student + driver info, timestamp, location, contact).

Emergency System → One-click SOS trigger with alert logs and CSV export.

Smart Fare Calculation → Dynamic pricing based on demand, time, and passengers.

Chatbot (cchatbot.html) → Voice + text assistant to answer FAQs and ride queries.

Maps & Navigation (routenavigation.html) → Google Maps integration for multiple routes, calm routes, traffic overlays, and voice navigation.

Login System (login.html) → Separate login flows for students and drivers, with Google OAuth placeholder.

📂 Project Structure
├── index.html            # Landing page (UniRiders intro + features)
├── login.html            # Student & Driver login UI
├── rides.html            # Main ride booking (student/driver panels)
├── rides_admin.html      # Admin dashboard with SOS alerts
├── cchatbot.html         # Voice + text chatbot interface
├── routenavigation.html  # Google Maps navigation & routing
├── script.js             # Core frontend logic (rides, fares, SOS simulation)
├── styles.css            # Global styles & theme

🛠️ Tech Stack

Frontend → HTML5, CSS3, JavaScript (Vanilla JS).

UI Theme → Gradient modern design (see styles.css).

Maps → Google Maps JavaScript API (Directions, Places, Layers).

Chatbot → Custom voice/text UI (integrate with Dialogflow or Rasa).

Realtime (Planned) → Socket.IO for live driver tracking + SOS push alerts.

Backend (Planned) → Node.js + Express with PostgreSQL for persistence.

Auth (Planned) → Firebase Auth (Google sign-in).


📊 Future Enhancements

✅ Real-time driver location updates (Socket.IO).

✅ Twilio integration for SOS alerts to emergency contacts.

✅ Database (Postgres/MongoDB) for persistent rides & alerts.



👨‍💻 Contributors
Arshia Nooraien Mohamad – Developer & Project Lead - arshiambu@gmail.com

⚡ UniRiders is built as a smart campus transport prototype — combining safety, affordability, and intelligence into one platform.

Arshia Nooraien Mohamad – Developer & Project Lead

⚡ UniRiders is built as a smart campus transport prototype — combining safety, affordability, and intelligence into one platform.
