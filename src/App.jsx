import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vans from "./pages/vans/Vans";
import VansDetails from "./pages/vans/VansDetails";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/layouts/HostLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
