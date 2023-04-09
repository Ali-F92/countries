import { RootLayout } from "layouts/root/RootLayout";
import { Details } from "pages/details";
import { Home } from "pages/home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "details/:identifier", element: <Details /> },
    ],
  },
]);
