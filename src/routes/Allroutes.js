
import { Routes, Route } from "react-router-dom"

import {Home, ProductsList, ProductDetails, Register, Login, PageNotFound} from '../pages';
import { CartPage } from "../pages/Cart/Cart";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { OrderPage } from "../pages/Order/Order";
import { DashbaordPage } from "../pages/Dashboard/Dashboard";

export const Allroutes = () => {
  return (
    <>
    <Routes>

<Route path="/" element={<Home />} />

<Route path="products" element={<ProductsList />} />
<Route path="products/:id" element={<ProductDetails />} />
<Route path="login" element={<Login />} />
<Route path="register" element={<Register />} />
<Route path="cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
<Route path="order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
<Route path="dashboard" element={<ProtectedRoutes><DashbaordPage /></ProtectedRoutes>} />
<Route path="*" element={<PageNotFound />} />


    </Routes>
    
    
    </>
  )
}
