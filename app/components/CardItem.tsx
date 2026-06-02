"use client";

import React from 'react';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';

const CardItem = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 my-8">

      <div className="flex flex-row gap-16  justify-center items-center">

        <div className="group w-1/2 max-w-[180px] aspect-square rounded-2xl border border-blue-500/30 bg-slate-900/40 p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-blue-950/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          
          <div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Danh mục</p>
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              Dự án
            </h3>
          </div>
        </div>

        <div className="group w-1/2 max-w-[180px] aspect-square rounded-2xl border border-yellow-500/60 bg-slate-900/40 p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:bg-yellow-950/10 animate-pulse hover:animate-none shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]">
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          
          <div>
            <p className="text-xs sm:text-sm text-yellow-500/80 font-medium">Mới nhất</p>
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
              Sự kiện
            </h3>
          </div>
        </div>

        <div className="group w-1/2 max-w-[180px] aspect-square rounded-2xl border border-red-500/60 bg-slate-900/40 p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:bg-yellow-950/10 animate-pulse hover:animate-none shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]">
          <div className="flex justify-between items-start">
            <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          
          <div>
            <p className="text-xs sm:text-sm text-yellow-500/80 font-medium">Mới nhất</p>
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
              Tiện ích
            </h3>
          </div>
        </div>

      

      </div>
    </div>
  );
};

export default CardItem;