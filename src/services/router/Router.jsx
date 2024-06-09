import Layout from "@/Layout";
import NotFound from "@/pages/NotFound";
import LoanCalculator from "@/pages/loan-calculator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LoanCalculator />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
