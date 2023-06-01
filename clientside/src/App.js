import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import DataShow from "./Components/UserCrud/DataShow";
import Protected from "./Components/Protected";
import Logout from "./Components/Logout";
import ProductAdd from "./Components/Productlisting/ProductAdd";
import ProductShow from "./Components/Productlisting/ProductShow";
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/all_Data"
                    element={<Protected Component={DataShow} />}
                />
                <Route path="/AddProducts" element={<ProductAdd />} />
                <Route path="/productShow" element={<ProductShow />} />
                <Route path="/" element={<Logout />} />
            </Routes>
        </div>
    );
}

export default App;
