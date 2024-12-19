import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../view/Login/login'
import Home from '../view/Home/home'
const routers = [
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        path: '/login',
        element: <Login />
    },
        
    {
        path: '/home',
        name:'home',
        element: <Home />
    },
]
 
export default createBrowserRouter(routers)
 