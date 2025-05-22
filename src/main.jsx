import { StrictMode, Suspense } from 'react'
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
import Home from './layout/Home.jsx'
import DetailsPage from './Components/DetailsPage.jsx'
import Loader from './Components/Loader.jsx'
import BrowserListingPage from './Components/BrowserLisTingPage.jsx'
import UpdatePost from './Components/UpdatePost.jsx'

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
   path:'addtofindroommate',
    element:<Privateroute>
     <AddToFindRoommate></AddToFindRoommate>
    </Privateroute>
    },
    { 
      path:"/details/:id",
      loader:({params})=>fetch(`https://roommatefinder-server-site.vercel.app/viewdetails/${params.id}`),
      
       element:<Suspense fallback={<Loader></Loader>}>
       <Privateroute>
     <DetailsPage></DetailsPage>
    </Privateroute></Suspense>
    },
    {
      path:"/browserlisting",
      loader:()=>fetch("https://roommatefinder-server-site.vercel.app/allpost"),
      element:<Suspense fallback={<Loader></Loader>}>
        <BrowserListingPage></BrowserListingPage>
      </Suspense>
    },
    {
      path:"/mylisting",
      element:<Suspense>
        <Privateroute>
          <MyListings></MyListings>
        </Privateroute>
      </Suspense>
    },
    {
      path:"/update/:id",
      
      loader:({params})=>fetch(`https://roommatefinder-server-site.vercel.app/viewdetails/${params.id}`),
      element:<Suspense>
      <UpdatePost></UpdatePost>
      </Suspense>
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
