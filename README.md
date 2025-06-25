# 🏠 Roommate Finder - Full Stack Web Application

A full-stack web application where users can find, post, and manage roommate listings. Built with **React**, **Express**, **MongoDB**, and **Firebase Authentication**, the platform supports user authentication, protected routes, CRUD functionality, and interactive UI components.

🌐 **Live Client:** [roommatefinder-client-site](https://event-management-9774d.web.app/)  
🚀 **Live Server (Vercel):** [roommatefinder-server-site](https://vercel.com/sifathasan2430s-projects/roommatefinder-server-site)  
📦 **Client Repo:** [GitHub Client](https://github.com/sifathasan2430/roommatefinder-client-site)

---

## 📸 Screenshot
![App Preview](https://i.ibb.co/C3fx7n8/68747470733a2f2f6f776c6265727473696f2d726573697a65642e73332e616d617a6f6e6177732e636f6d2f506f70706572.png)

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

---

## 📦 Dependencies

### ➤ Frontend
```bash
react
react-dom
react-router-dom
axios
framer-motion
tailwindcss
daisyui ```
```bash
express
cors
dotenv
firebase-admin
mongodb ```


# Clone the client repo
git clone https://github.com/sifathasan2430/roommatefinder-client-site.git
cd roommatefinder-client-site

# Install dependencies
npm install

# Start the client
npm run dev
# Clone the client repo
git clone https://github.com/sifathasan2430/roommatefinder-client-site.git
cd roommatefinder-client-site

# Install dependencies
npm install

# Start the client
npm run dev



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

Custom 404 page and dark/light toggle

🧑‍💻 Author
Sifat Hasan
Frontend-focused MERN Developer | Passionate about building clean, responsive UIs and secure full-stack applications.

🔗 GitHub
