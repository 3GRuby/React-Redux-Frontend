import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path={"/cart"} element={<Cart/>} />
          <Route path={"/"} element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
