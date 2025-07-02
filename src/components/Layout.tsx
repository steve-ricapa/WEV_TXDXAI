import React from 'react';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      {children}
    </div>
  );
};

export default LandingLayout;
