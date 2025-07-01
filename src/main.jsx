import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './layout/Root.jsx'
import Errorpage from './Components/Errorpage.jsx'
import SignUp from './Components/SignUp.jsx'
import Login from './Components/Login.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'


import Home from './layout/Home.jsx'
import DetailsPage from './Components/DetailsPage.jsx'
import Loader from './Components/Loader.jsx'


import AllRooms from './Pages/AllRooms/AllRooms.jsx'
import BookingForm from './Pages/Booking/BookingForm/BookingForm.jsx'
import MyBookings from './Pages/MyBookings/MyBookings.jsx'
import filter from '../Filter.jsx'
import DashboardOverview from './layout/AdminLayout/Dashboard/DashboardOverview.jsx'

import AddListingForm from './Components/AddListingForm/AddListingForm.jsx'
import AdminRoot from './layout/AdminLayout/AdminRoot/AdminRoot.jsx'
import ListingsTable from './Components/Listtingtable/ListtingsTable.jsx'

const router=createBrowserRouter([{
  path:"/",
  Component:Root,
  errorElement:<Errorpage></Errorpage>,
  children:[{
       index:true,
       Component:Home,
       loader:()=>fetch("https://roommatefinder-server-site.vercel.app/availablemembers"
       )
  },
    {
   path:"/signup",
   Component:SignUp 
  }, 
  {
    path:"/login",
    Component:Login
  },
 
  
    {
      path:"/allrooms",
      element:<AllRooms></AllRooms>
    },
    { 
      path:"/room/:id",
      loader:({params})=>fetch(`https://roommatefinder-server-site.vercel.app/room/${params.id}`),
      
       element:<Suspense fallback={<Loader></Loader>}>
       <PrivateRoute>
     <DetailsPage></DetailsPage>
    </PrivateRoute></Suspense>
    },
    {
      path:"/bookingpage/:id",
      element:<PrivateRoute><BookingForm></BookingForm></PrivateRoute>
    },
    
   
    {
      path:"/mybookings",
      element:<PrivateRoute>
<MyBookings></MyBookings>
      </PrivateRoute>
    },




   
    {
      path:'/host',
      element:<div>loading </div>
    },
    {
      path:"/about",
     Component:filter
    },

    //admin
   
      
  

]
},
  {
  path: '/dashboard',
  element: <PrivateRoute >  <AdminRoot /> </PrivateRoute>,
  children: [
    { index: true, element: <DashboardOverview /> },
    { path: 'add-listing', element: <AddListingForm /> },
    { path: 'listings', element: <ListingsTable /> },
  ]
}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContextProvider>
     <RouterProvider router={router} ></RouterProvider>
     </AuthContextProvider>
  </StrictMode>,
)
