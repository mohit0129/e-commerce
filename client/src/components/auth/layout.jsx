import { Outlet } from "react-router-dom";
import AuthBanner from "../assets/AuthBanner.jpeg";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Left side - Image and Welcome Message */}
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 w-1/2 px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0">
          <img
            src={AuthBanner}
            alt="Shopping"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-md space-y-6 text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Welcome to ECommerce Shopping
          </h1>
          <p className="text-lg text-gray-100">
            Discover amazing products and enjoy a seamless shopping experience
          </p>
        </div>
      </div>

      {/* Right side - Auth Forms */}
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
