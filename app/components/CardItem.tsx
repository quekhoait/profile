"use client";

import React from 'react';
import { Briefcase, Calendar, ArrowUpRight, Wrench } from 'lucide-react'; // Thêm icon Wrench cho Tiện ích

const CardItem = () => {
  const handleScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 my-8">


      <div className="flex flex-row gap-6 md:gap-16 justify-center items-center">

        <button type="button" onClick={() => handleScroll("projects")} className="group w-1/3 max-w-[180px] aspect-square rounded-2xl border border-blue-500/30 bg-slate-900/40 p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-blue-950/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]" aria-label="Đi tới dự án">
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium text-left">Danh mục</p>
            <h3 className="text-left text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              Dự án
            </h3>
          </div>
        </button>

        <button type="button" onClick={() => handleScroll("events")} className="group w-1/3 max-w-[180px] aspect-square rounded-2xl border border-yellow-500/40 bg-slate-900/40 p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-950/20 shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]" aria-label="Đi tới sự kiện">
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-yellow-500/80 font-medium text-left">Mới nhất</p>
            <h3 className="text-left text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
              Sự kiện
            </h3>
          </div>
        </button>

        <button type="button" onClick={() => handleScroll("utility")} className="group w-1/3 max-w-[180px] aspect-square rounded-2xl border border-red-500/40 bg-slate-900/40 p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-red-400 hover:bg-red-950/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]" aria-label="Đi tới tiện ích">
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-xl bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-red-500/80 font-medium text-left">Hệ thống</p>
            <h3 className="text-left text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
              Tiện ích
            </h3>
          </div>
        </button>

      </div>

      
    </div>

  );
};

export default CardItem;