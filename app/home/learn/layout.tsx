import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-gradient-to-b from-white to-Yellow min-h-screen py-20">
     <div className="mx-auto w-full max-w-6xl text-Black">{children}</div>
    </main>
  );
};

export default Layout;