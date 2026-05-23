import { Footer } from "./components/footer/Footer.tsx";
import { Menu } from "./components/menu/Menu.tsx";
import { Navbar } from "./components/navbar/Navbar.tsx";
import { Home } from "./pages/home/Home";
import {Products} from "./pages/products/Products"
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
  ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;