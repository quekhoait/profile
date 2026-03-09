import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 fixed w-full z-10">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <img src='https://res.cloudinary.com/ds11ggie4/image/upload/v1772183830/unnamed_qkxacn.gif'></img>
        </div>
      </div>

      {/* Action Button & Avatar */}
      <div className="flex items-center gap-16">
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="/#" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="/about-us" className="hover:text-blue-500 transition-colors">About</a>
          <a href="/event" className="hover:text-blue-500 transition-colors">Events</a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;