import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Errorpage from './Components/Errorpage.jsx'
import SignUp from './Components/SignUp.jsx'
import Login from './Components/Login.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
import Privateroute from './Components/Privateroute.jsx'
import MyListings from './Components/MyListings.jsx'
import AddToFindRoommate from './Components/AddtoFindRoommate.jsx'

const router=createBrowserRouter([{
  path:"/",
  Component:Root,
  errorElement:<Errorpage></Errorpage>,
  children:[{
   path:"/signup",
   Component:SignUp 
  }, 
  {
    path:"/login",
    Component:Login
  },
  {
    path:'mylistings',
    element:<Privateroute>
      <MyListings></MyListings>
    </Privateroute>
  },
  {
   path:'addtofindroommate',
    element:<Privateroute>
     <AddToFindRoommate></AddToFindRoommate>
    </Privateroute>
    }
]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContextProvider>
     <RouterProvider router={router} ></RouterProvider>
     </AuthContextProvider>
  </StrictMode>,
)
