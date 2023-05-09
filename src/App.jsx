import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Await,
} from "react-router-dom";
import Vans from "./pages/vans/Vans";
import VansDetails, { loader as vansDetailLoader } from "./pages/vans/VansDetails";
import Layout from "./components/layouts/Layout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/layouts/HostLayout";
import VansList, { loader as hostLoader } from "./pages/host/VansList";
import VansDescription, { loader as VansDescriptionLoader } from "./pages/host/VansDescription";
import Details from "./pages/host/Details";
import Pricing from "./pages/host/Pricing";
import Photos from "./pages/host/Photos";
import NotFound from "./pages/NotFound";
import { loader as vansLoader } from "./pages/vans/Vans";
import ErrorPage from "./ErrorPage";
import Login, { loader as loginLoader, action as actionLoader } from "./pages/Login";
import requireAuth from "../utils"
// export const loader = () =>
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} loader={loginLoader} action={actionLoader} />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<ErrorPage />}
        />
        <Route path="vans/:id" element={<VansDetails />} loader={vansDetailLoader} />
        <Route path="host" element={<HostLayout />} >
          <Route index element={<Dashboard />} loader={
            async () => { await requireAuth() }
          } />
          <Route path="income" element={<Income />} loader={
            async () => { await requireAuth() }
          } />
          <Route path="vans" element={<VansList />} loader={hostLoader} />
          <Route path="vans/:id" element={<VansDescription />} loader={VansDescriptionLoader}>
            <Route index element={<Details />} loader={
              async () => await requireAuth()
            } />
            <Route path="pricing" element={<Pricing />} loader={
              async () => await requireAuth()
            } />
            <Route path="photos" element={<Photos />} loader={
              async () => await requireAuth()
            } />
          </Route>

          <Route path="reviews" element={<Reviews />} loader={
            async () => await requireAuth()
          } />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
