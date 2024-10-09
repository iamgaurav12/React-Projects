import { Home } from "./pages/Home";
import "./App.css";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/layout/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "/country",
        element: <Country />,
      },
    ],
  },
]);

const App = () => {
  return (
    <h1>
      <RouterProvider router={router}></RouterProvider>
    </h1>
  );
};

export default App;
