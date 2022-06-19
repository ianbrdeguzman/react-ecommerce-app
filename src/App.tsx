import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentSelectionPage from './pages/PaymentSelectionPage';
import OrderPage from './pages/OrderPage';
import PlaceOrderPage from './pages/PlaceOrderPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentSelectionPage />} />
          <Route path="/place-order" element={<PlaceOrderPage />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />}>
            <Route path=":id/:qty" element={<CartPage />} />
          </Route>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
