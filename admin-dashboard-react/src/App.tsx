import { Footer } from "./components/footer/Footer.tsx";
import { Menu } from "./components/menu/Menu.tsx";
import { Navbar } from "./components/navbar/Navbar.tsx";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import {Products} from "./pages/products/Products"
import { User } from "./pages/singelUser/User.tsx";
import { Users } from "./pages/users/Users.tsx";
import "./styles/global.scss"


import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
         <Outlet/> 
        </div>
      </div>
    <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
    {
    path: "/",
    element: <Home/>,
    },
    {
    path: "/products",
    element: <Products/>,
    },
    {
    path: "/users",
    element: <Users/>
    },
    {
    path:"/users/:id",       
    element: <User/>,   
    },
     {
    path:"/products/:id",       
    element: <Product/>,   
    },
  ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;