import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import CheckoutPage from "./pages/CheckoutPage";
import APCProductList from "./components/APCProductList";
import APCCheckout from "./components/APCCheckout";
import Confirmation from "./components/Confirmation";
import ProductDetails from "./components/ProductDetails";
import AddProductForm from "./components/AddProductForm";
import LoginPage from "./Auth/Login";
import SignupPage from "./Auth/Signup";
import PrivateRoute from "./PrivateRoute";
import ProductList from "./Seller/SellerProductList";
import BecomeSeller from "./components/BecomeSeller";
import SellerForm from "./components/SellerForm";
function App() {
  return (
    <div className="font-dosis bg-gray-100 min-h-screen text-gray-800">
      <Router>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/seller-form" element={<SellerForm />} />
          {/* Private Routes */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/apc-products"
            element={
              <PrivateRoute>
                <APCProductList />
              </PrivateRoute>
            }
          />
          <Route
            path="/apc-checkout"
            element={
              <PrivateRoute>
                <APCCheckout />
              </PrivateRoute>
            }
          />
          <Route
            path="/product-details"
            element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-product"
            element={
              <PrivateRoute>
                <AddProductForm />
              </PrivateRoute>
            }
          />
          {/* Public Routes */}
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/apc-confirmation" element={<Confirmation />} />
          <Route path="/1" element={<ProductList />} />
          <Route path='*' element={<div>404 page not found</div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
