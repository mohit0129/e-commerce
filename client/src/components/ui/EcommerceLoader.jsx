import React from "react";

export default function EcommerceLoader() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center bg-transparent">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-6 w-40 h-28 overflow-visible">
          {/* Animated shopping cart */}
          <div className="absolute left-0 top-0 w-full h-full">
            <div className="relative w-full h-full">
              <svg
                className="absolute left-0 top-0 w-32 h-24 animate-cart-run"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 48 48"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}
              >
                <rect x="10" y="16" width="28" height="18" rx="4" className="fill-primary/10" />
                <path
                  d="M14 16V12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v4"
                  className="stroke-primary"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Wheels */}
                <circle cx="18" cy="38" r="3" className="fill-primary">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 18 38" to="360 18 38" dur="0.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="34" cy="38" r="3" className="fill-primary">
                  <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 34 38" to="360 34 38" dur="0.7s" repeatCount="indefinite" />
                </circle>
                <path
                  d="M16 24h16m-16 6h10"
                  className="stroke-primary"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          {/* Cart running animation (move left to right) */}
          <style>{`
            @keyframes cart-run {
              0% { transform: translateX(0); }
              50% { transform: translateX(40px); }
              100% { transform: translateX(0); }
            }
            .animate-cart-run {
              animation: cart-run 1.4s cubic-bezier(0.4,0,0.2,1) infinite;
            }
          `}</style>
        </div>
        <h2 className="text-2xl font-bold text-primary mb-2 animate-pulse">Please wait...</h2>
        <p className="text-muted-foreground text-base italic font-medium animate-fade-in-slow">We're fetching the best deals and products just for you!</p>
      </div>
    </div>
  );
} 