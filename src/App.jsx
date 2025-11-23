import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Catalogue from "./pages/Catalogue";
import { catalogueLoader } from "./helpers/loaders";
import { sendEmail } from "./helpers/actions";
import emailjs from "@emailjs/browser";
import ErrorPage from "./pages/ErrorPage";
import CookiePolicies from "./pages/CookiePolicies";

//intiliazing the email service provider
emailjs.init("tU3HNvbdGlTpKX1qk");

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/catalogue", element: <Catalogue />, loader: catalogueLoader },
      { path: "/services", element: <Services /> },
      { path: "/contacts", element: <Contacts />, action: sendEmail },
      { path: "/cookie-policies", element: <CookiePolicies /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
