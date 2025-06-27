# 🏠 Roommate Finder - Full Stack Web Application

A full-stack web application where users can find, post, and manage roommate listings. Built with **React**, **Express**, **MongoDB**, and **Firebase Authentication**, the platform supports user authentication, protected routes, CRUD functionality, and interactive UI components.

🌐 **Live Client:** [roommatefinder-client-site](https://roomatefinder-5e9a6.web.app)  
🚀 **Live Server (Vercel):** [roommatefinder-server-site](https://roommatefinder-server-site.vercel.app)  
📦 **Client Repo:** [GitHub Client](https://github.com/sifathasan2430/roommatefinder-client-site)

---

## 📸 Screenshot
<img height='500px' src="https://i.ibb.co/wZ4dfBMy/Screenshot-2025-06-25-170928.png" alt="Screenshot-2025-06-25-170928" border="0">

---

## ✨ Key Features
- 🔐 Email/password & Google login (Firebase)
- ➕ Add Roommate listing with location, rent, preferences, etc.
- 🔍 Browse all available listings in table view
- 👤 "My Listings" shows posts added by logged-in user only
- ✏️ Update or delete own listings with confirmation modal
- ❤️ Like a listing (except your own), reveal contact info after liking
- 🌙 Light/Dark mode toggle
- 🚫 Custom 404 Not Found page
- 🔄 Loading spinners while fetching data

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- DaisyUI
- Axios
- Framer Motion
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Firebase Admin SDK

### Authentication & Environment
- Firebase Authentication
- dotenv
- CORS





🔐 Private/Protected Routes
/add-roommate → Add new listing

/my-listings → View/update/delete user’s own listings

/update/:id → Update listing

/details/:id → View details & like listing

🔁 If not logged in, user is redirected to the login page.



⚙️ CRUD Operations
Create: Users can add roommate listings with all relevant info

Read: All users can browse listings

Update: Owners can update their own posts

Delete: Owners can delete with confirmation prompt


🧪 Extra Features
Smooth animations with Framer Motion

Reusable components with DaisyUI & Tailwind


## 📦 Dependencies

Install my-project with npm

```bash
  react
  react-dom
  react-router-dom
  axios
  framer-motion
  tailwindcss
  daisyui
```
# Backend Dependencies
```bash 
express
cors
dotenv
firebase-admin
mongodb
```

## 🚀 How to Run Locally

### 🔧 Client

```bash
# Clone the repository
git clonegit  https://github.com/sifathasan2430/roommatefinder-client-site.git
 cd roommatefinder-client-site

# Install dependencies
npm install

# Start the development server
npm run dev
🔧 Server
bash
Copy
Edit
# Clone the repository
git clone https://github.com/sifathasan2430/tour-booking-project
cd server-repo

# Install dependencies
npm install

# Add environment variables in a `.env` file

# Start the server
npm run dev

🌐 Live Client: https://event-management-9774d.web.app/

🚀 Live Server: https://vercel.com/sifathasan2430s-projects/roommatefinder-server-site

🙋‍♂️ About Me
I'm Sifat Hasan, a frontend-focused MERN Stack Developer passionate about building user-friendly web apps with React and Firebase.

Feel free to connect on GitHub!
