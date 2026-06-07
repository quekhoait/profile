"use client";

import { useState, MouseEvent } from "react";
import { Button } from "../../components/ui/button";
import Typewriter from "typewriter-effect";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function IntroduceComponent() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;
    setMousePos({ x, y });
  };

  const resetMouse = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="relative overflow-hidden text-white flex items-center pt-24 pb-6 md:pt-32"
    >
      <div className="absolute inset-0 hidden md:flex top-20 justify-center pointer-events-none select-none z-0">
        <h1
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
          className="text-[11vw] font-black tracking-[0.25em] text-yellow-500 opacity-30 text-center leading-[0.95] transition-all duration-300 ease-out"
        >
          HUYNH VAN
          <br />
          QUE KHOA
        </h1>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 blur-[80px] md:blur-[150px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-yellow-500/10 blur-[80px] md:blur-[150px] rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-16 items-center">

          {/* Left Column: Info */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badges: Location, Email, Phone, LinkedIn */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 md:mb-6">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-[10px] md:text-xs flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <MapPin className="w-3 h-3 text-slate-400" />
                TP. Hồ Chí Minh, Việt Nam
              </span>


            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-4 md:mb-6">
              Tôi là{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                Quế Khoa
              </span>
            </h1>

            <div className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-6 md:mb-8 min-h-[56px] md:min-h-[64px]">
              <Typewriter
                options={{
                  strings: [
                    "Đang cố gắng cốt và sống !!! 💻",
                    "Code đến khi hết bug. 🚀",
                    "Tìm bug để fix khi hết code!!"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                  wrapperClassName: "text-slate-300 font-medium",
                  cursorClassName: "text-yellow-500 animate-pulse font-light"
                }}
              />
            </div>

            {/* Quote */}
            <div className="border-l-4 border-yellow-500 pl-4 md:pl-5 py-2 bg-yellow-500/5 rounded-r-xl max-w-xl mb-8 md:mb-10">
              <p className="italic text-slate-300 text-sm md:text-base leading-relaxed">
                “Tâm ở đâu, năng lượng ở đó!”
              </p>
            </div>

            {/* Action Call Buttons (Đã sửa lỗi trùng lặp Mail) */}
            <div className="flex flex-wrap gap-3 mb-4 md:mb-6">
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=quekhoa2005@gmail.com&su=Liên hệ công việc"
                target="_blank"
                className="px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-200 text-sm flex items-center gap-2 hover:bg-cyan-500 hover:text-slate-900 font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/10"
              >
                <Mail className="w-4 h-4" />
                quekhoa2005@gmail.com
              </a>

              <a
                href="0916499634" // Thay số điện thoại của bạn vào đây
                className="px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-200 text-sm flex items-center gap-2 hover:bg-green-500 hover:text-slate-900 font-semibold transition-all duration-300 shadow-lg shadow-green-500/10"
              >
                <Phone className="w-4 h-4" />
                0916499634
              </a>


            </div>
          </div>

          {/* Right Column: Avatar Block */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-12 lg:mb-0 pt-16 lg:pt-0">
            <div className="group relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-white/40 bg-black/40 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all duration-300">
              
              {/* Glow hiệu ứng viền đổi màu phía sau */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Khối chứa ảnh chân dung */}
              <div className="absolute top-[-20px] left-0 right-0 overflow-visible rounded-full flex items-end justify-center">
                <img
                  src="https://res.cloudinary.com/ds11ggie4/image/upload/v1780368522/606448772_18093801767505207_2570095527280900645_n_vh1ny7-removebg-preview_gw8zhk.png"
                  alt="Quế Khoa"
                  className="w-[95%] h-[calc(100%+70px)] sm:h-[calc(100%+80px)] -mt-20 sm:-mt-24 object-contain select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transform scale-105 group-hover:scale-115 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="absolute -bottom-3 bg-slate-900/90 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/10 shadow-lg z-20">
                <h3 className="font-bold text-xs sm:text-sm tracking-wide text-cyan-400">Software Engineer</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}