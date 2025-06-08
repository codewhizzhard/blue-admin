import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import ProductManagement from "./pages/productManagement";
import OrderManagement from "./pages/orderManagement";
import UserManagement from "./pages/userManagement";
import Payments from "./pages/payments";
import Settings from "./pages/settings";
import AddProduct from "./pages/addProduct";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard />} />
        <Route path="/prds" element={<ProductManagement />}/>
        <Route path="/prds/add" element={<AddProduct />} />
        <Route path="/ords" element={<OrderManagement />} />
        <Route path="/usrs" element={<UserManagement />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
