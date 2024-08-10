import { useState } from "react";
import { ToastContainer } from "react-toastify";

import GlobalStyles, { Container } from "./styles/globalStyles";

import Home from "./pages/Home";

import Nav from "./components/Nav";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState({
    query: "iphone",
    offset: 0,
  });

  return (
    <div className="App">
      <Container>
        <Nav data={data} setData={setData} />
        <Cart />
        <Home data={data} setData={setData} />
      </Container>
      <GlobalStyles />
      <ToastContainer position="top-center" autoClose={3000} closeOnClick={true} />
    </div>
  );
}

export default App;
