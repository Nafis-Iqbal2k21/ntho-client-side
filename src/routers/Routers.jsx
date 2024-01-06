import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import MyRegistations from "../pages/MyRegistations/MyRegistations";
import MyRegistationDetails from "../pages/myRegistationDetails/myRegistationDetails";
import ErrorMessage from "../pages/ErrorMessage/ErrorMessage";
import PrivateRoute from "../routers/PrivateRoute";
import Registration from "../pages/Registration/Registration";
import PDFDownload from "../components/PDFDownLoad/PDFDownload";
import QRReader from "../components/QRReader/QRReader";
import EventDtail from "../components/EventDetail/EventDtail";
import Rules from "../components/Rules/Rules";




const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Roots/>,
        errorElement: <ErrorMessage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path: '/registration',
                element: <PrivateRoute><Registration/></PrivateRoute>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/myRegistrations',
                element: <MyRegistations/>,
                // loader: ()=> fetch(`http://localhost:5000/registations`)
            },
            {
                path:'/myRegistrationDetails/:id',
                element: <MyRegistationDetails/>,
                loader: ({params})=> fetch(`http://localhost:5000/registrations/${params.id}`)
            },
            {
                path:'/eventDetail',
                element: <EventDtail/>,
            },
            {
                path:'/rules',
                element: <Rules/>,
            },
    
        
        ]
    }
   
])

export default Routers;