import React from 'react'

const Footer = () => {
  return (
  
    <footer className=" py-12 px-4">
  <div className="max-w-screen-xl mx-auto flex flex-col items-center">
    
    <nav className="flex flex-wrap justify-center space-x-8 mb-8">
      <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Home</a>
      <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About</a>
      <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Events</a>
      <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Contact</a>
    </nav>

    <div className="flex space-x-6 mb-10 text-slate-500">
      <a href="#" className="hover:text-slate-800 transition-colors" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        </svg>
      </a>
      <a href="#" className="hover:text-slate-800 transition-colors" aria-label="Link">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      </a>
      <a href="#" className="hover:text-slate-800 transition-colors" aria-label="Website">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      </a>
    </div>

    <div className="text-slate-400 text-sm tracking-wide">
      &copy; 2023 Alex Portfolio. Crafted with passion.
    </div>

  </div>
</footer>
  )
}

export default Footer