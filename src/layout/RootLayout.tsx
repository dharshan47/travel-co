import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
