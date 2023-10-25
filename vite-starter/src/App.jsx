import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import Cart from "./pages/cart";
import Blog from "./pages/blog";
import NotFound from "./pages/notFound";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./features/product/productSlice";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch()

  const { isOpen } = useSelector((store => store.modal))
  const { isLoading } = useSelector(store => store.products)

  useEffect(() => {
    dispatch(getProducts())
  },[])

  if(isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}
export default App;
