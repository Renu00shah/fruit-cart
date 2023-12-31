import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {CartProvider} from 'react-use-cart'


function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </BrowserRouter>
        </CartProvider>

    </>
  );
}

export default App;
