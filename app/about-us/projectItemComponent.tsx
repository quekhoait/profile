import React from "react";

const ProjectItemComponents = ({ tools, title, link, description }) => {
  return (
    <div className="flex items-center justify-center ">
      {/* Card Container */}
      <div className="bg-[#161b22] rounded-[40px] overflow-hidden shadow-2xl border border-gray-800">
        <div className="relative bg-gradient-to-b from-[#3d444d] to-[#21262d] flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/ds11ggie4/image/upload/v1772714177/web1_yruw1p.png"
            className="object-contain"
          />
        </div>
        {/* Bottom Section: Content Area */}
        <div className="p-4 ">
          <div className="flex justify-between items-start mb-4">
            <a href={link} target="_blank">
              <h2 className="text-xl font-bold text-white tracking-tight">
                {title}
              </h2>
            </a>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed mb-2 line-clamp-2">
            {description}
          </p>
          {/* Badges/Tags */}
          <div className="flex gap-3">
            {tools?.map((name) => (
              <span
                key={name}
                className="px-5 py-2 rounded-full bg-gray-800 text-gray-400 text-[10px] font-bold tracking-widest uppercase border border-transparent hover:border-gray-600 transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemComponents;
