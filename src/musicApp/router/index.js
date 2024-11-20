import DefaultLayOut from "../compoments/layout/DefaultLayout";
import SidebarLayOut from "../compoments/layout/SidebarLayout";
import Artists from "../page/Artists";
import Categories from "../page/Categories";
import Home from "../page/Home";
import Login from "../page/Login";
import Profile from "../page/Profile";
import Register from "../page/Register";


const publicRouter = [
    { path:'/',element: Home,layout:DefaultLayOut },
    { path:'/register',element: Register,layout:null },
    { path:'/login',element: Login,layout:null },
    { path:'/profile',element: Profile,layout:SidebarLayOut },
    { path:'/artists',element: Artists,layout:SidebarLayOut },
    { path:'/categories',element: Categories,layout:SidebarLayOut },
]

export {
    publicRouter
}