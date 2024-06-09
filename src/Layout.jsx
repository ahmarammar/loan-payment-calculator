import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
