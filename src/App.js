import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products/Products";
import LoginForm from "./components/loginpage/Login";
import SignupForm from "./components/signuppage/Signup";
import { AuthProviderFunction } from "./context/authContext";
import ProtectedRoute from "./protectedRoute";
import Cart from "./components/cartpage/Cart";

function App() {
  return (
    <AuthProviderFunction>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route
          exact
          path="/"
          element={<Navigate to={"/home"} replace={true} />}
        />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </AuthProviderFunction>
  );
}

export default App;
