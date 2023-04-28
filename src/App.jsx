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
import VansList from "./pages/host/VansList";
import VansDescription from "./pages/host/VansDescription";
import Details from "./pages/host/Details";
import Pricing from "./pages/host/Pricing";
import Photos from "./pages/host/Photos";
import NotFound from "./pages/NotFound";
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
            <Route path="vans" element={<VansList />} />
            <Route path="vans/:id" element={<VansDescription />} >
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>

            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
