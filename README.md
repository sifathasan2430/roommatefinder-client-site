![image](https://github.com/user-attachments/assets/8bc88d64-4850-438c-9cbf-0a2ae0940a16)# 🏠 Roommate Finder - Room Booking Web App

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=flat&logo=web)](https://roomatefinder-5e9a6.web.app/)

A full-stack room booking platform where users can search and book apartments, and admins can manage listings via a secure admin panel.

---

## 📸 Preview

<details>
  <summary>Click to view screenshots</summary>

  <img src="https://i.ibb.co/G37pzmz1/roomatefinder-5e9a6-web-app-3.png" alt="App Screenshot" style="max-width: 100%; height: auto; overflow: auto;" />
</details>

---

## 🚀 Live Website

🔗 **[roomatefinder-5e9a6.web.app](https://roomatefinder-5e9a6.web.app/)**

---

## 🎯 Features

### 👤 User Features:
- 🔍 **Filter & Search** apartments by category, location, price, and amenities
- 🏠 **View apartment details** with images, features, and availability
- 🗓️ **Book available apartments** with preferred move-in and move-out dates
- 📑 **Track bookings and statuses** (e.g., pending, approved)
- 🔐 **Secure authentication** with Firebase

### 🛠️ Admin Features:
- 🧩 **Admin Panel** for managing room listings
- ➕ **Upload apartments** with descriptions and amenities
- ✏️ **Update / Delete apartment listings**
- 🔐 **Role-based access control** for admins vs users

---

## 🧰 Tech Stack

| Tech              | Use                             |
|------------------|----------------------------------|
| React.js         | Frontend framework               |
| React Router DOM | Routing                          |
| Firebase Auth     | Authentication                  |
| Lucide React     | Icons                            |
| Tailwind CSS     | Styling                          |
| Node.js + Express (optional) | Backend (API routes ) |
| MongoDB  | Database    |

---

## 🔐 Environment Variables

Create a `.env` file in your project root and include:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
# Clone the repository
git clone https://github.com/your-username/roommatefinder.git
cd roomfinder

# Install dependencies
npm install

# Start the development server
npm run dev
