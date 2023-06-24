import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalContextProvider } from "./contexts/globalContext";
import ErrorBoundary from "./common/ErrorBoundary";
import ContactPage from "./pages/ContactPage/ContactPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import { useEffect } from "react";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        ErrorBoundary={() => <div>Error occured</div>}
        element={<Root />}
      >
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Route>
    )
  );

  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
}

function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <main className="relative">
      <Navbar />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </main>
  );
}
