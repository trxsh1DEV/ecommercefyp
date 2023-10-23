import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import { Login, Register } from './pages/Login/Login';
import CheckoutSuccess from './Components/Payments/CheckoutSuccess';
import CheckoutCancel from './Components/Payments/CheckoutCancel';
import NotFound from './pages/NotFound/NotFound';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser); // Defina sua lógica de autenticação aqui
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact="/" path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cancel" element={<CheckoutCancel />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
