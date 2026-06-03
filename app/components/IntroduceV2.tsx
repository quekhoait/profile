"use client";

import { useState, MouseEvent } from "react";
import Typewriter from "typewriter-effect";
import { Mail, MapPin } from "lucide-react"; 

export default function IntroduceV2() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Tạo hiệu ứng lắc nhẹ theo chuột cho ảnh chân dung
    const x = (e.clientX - window.innerWidth / 2) / 60;
    const y = (e.clientY - window.innerHeight / 2) / 60;
    setMousePos({ x, y });
  };

  const resetMouse = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="relative overflow-hidden text-white flex items-center pt-24 pb-12 md:pt-32" 
    >
      {/* Glow Effects (Đèn nền mờ tạo chiều sâu) */}
      <div className="absolute top-10 left-10 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-yellow-500/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badges: Location & Email */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 md:mb-6">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-[10px] md:text-xs flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <MapPin className="w-3 h-3 text-slate-400" />
                TP. Hồ Chí Minh, Việt Nam
              </span>

              <a 
                href="mailto:quekhoa2005@gmail.com" 
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-[10px] md:text-xs flex items-center gap-2 hover:bg-slate-800 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-3 h-3 text-cyan-400" />
                quekhoa2005@gmail.com
              </a>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-4 md:mb-6">
              Tôi là{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                Quế Khoa
              </span>
            </h1>

            {/* Typewriter Description */}
            <div className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-6 md:mb-8 min-h-[56px] md:min-h-[64px]">
              <Typewriter
                options={{
                  strings: [
                    "Đang cố gắng cốt và sống !!! 💻",
                    "Một Fullstack Developer đam mê công nghệ. 🚀",
                    "Luôn tìm tòi và ứng dụng AI vào thực tế. 🤖"
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
            <div className="border-l-4 border-yellow-500 pl-4 md:pl-5 py-2 bg-yellow-500/5 rounded-r-xl max-w-xl">
              <p className="italic text-slate-300 text-sm md:text-base leading-relaxed">
                “Tâm ở đâu, năng lượng ở đó!”
              </p>
            </div>
          </div>

          {/* Right Column: Clean Vertical Image & Vertical Text */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              
              {/* Ảnh chân dung dọc đứng thẳng - Đã xóa bỏ hoàn toàn khung border/nền */}
              <div className="relative h-[380px] sm:h-[450px] w-[100%] pointer-events-none">
                <img
                  src="https://res.cloudinary.com/ds11ggie4/image/upload/v1780473628/IMG_1562_wfgvcz-removebg-preview_oowu9i.png"
                  alt="Huỳnh Văn Quế Khoa"
                  className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] transform group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Chữ "QUẾ KHOA" xếp dọc từng từ/chữ nằm ở bên phải ảnh */}
              <div className="flex flex-col justify-center items-center font-black text-4xl sm:text-5xl tracking-widest leading-none bg-gradient-to-b from-blue-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <span>Q</span>
                <span>U</span>
                <span>Ế</span>
                <span className="my-3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" /> {/* Dấu chấm cách giữa Quế và Khoa */}
                <span>K</span>
                <span>H</span>
                <span>O</span>
                <span>A</span>
              </div>

              {/* Chức danh xoay dọc nghệ thuật ở rìa ngoài cùng */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 hidden sm:block whitespace-nowrap">
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
                  Software Engineer // 2026
                </span>
              </div>

        
          </div>

        </div>
      </div>
    </section>
  );
}