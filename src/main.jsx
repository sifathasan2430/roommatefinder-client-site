import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './layout/Root.jsx'
import Errorpage from './components/Errorpage.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'



import Home from './layout/Home.jsx'
import DetailsPage from './components/DetailsPage.jsx'
import Loader from './components/Loader.jsx'


import AllRooms from './Pages/AllRooms/AllRooms.jsx'
import BookingForm from './Pages/Booking/BookingForm/BookingForm.jsx'
import MyBookings from './Pages/MyBookings/MyBookings.jsx'

import DashboardOverview from './layout/AdminLayout/Dashboard/DashboardOverview.jsx'

import AddListingForm from './components/AddListingForm/AddListingForm.jsx'
import AdminRoot from './layout/AdminLayout/AdminRoot/AdminRoot.jsx'
import ListingsTable from './components/Listtingtable/ListtingsTable.jsx'
import UpdateListingForm from './components/UpdateListingForm/UpdateListingForm.jsx'
import { Provider } from 'react-redux'

import LoginForm from './components/Login/LoginForm.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { persistor, store } from './Store/Store.js'
import { PersistGate } from 'redux-persist/integration/react'
import Landing from './components/Landing/Landing.jsx'
import PrivateRoute from './components/Privateroute.jsx'
const queryClient = new QueryClient()
const router=createBrowserRouter([{
    path:"/",
  element:<Root></Root>,
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
    Component:LoginForm
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




   
    


    //admin
   
      
  

]
},
  {
  path: '/dashboard',
  element:  <AdminRoot /> ,
  children: [
    {path:'/dashboard/adminOverView', element: <DashboardOverview /> },
    { path: '/dashboard/add-listing', element: <AddListingForm /> },
    { path: '/dashboard/listings', element: <ListingsTable /> },
    {
      path:'/dashboard/update-form/:id',
      element:<UpdateListingForm></UpdateListingForm>
    }
  ]
}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <AuthContextProvider>
     <RouterProvider  router={router} ></RouterProvider>
     </AuthContextProvider>
       </PersistGate>
    </Provider>
   </QueryClientProvider>
  </StrictMode>,
)
