"use client";

import React from 'react';
import { Github, ExternalLink, Layers } from 'lucide-react';

// Định nghĩa kiểu dữ liệu cho 1 object dự án
export interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'Completed' | 'In Progress';
}

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/50 hover:-translate-y-1 shadow-lg h-full">
      
      {/* Hiệu ứng đường chỉ sáng viền trên khi hover */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Status Badge */}
        <div className="flex justify-between items-center mb-4">
          <Layers className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
            project.status === 'Completed' 
              ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
              : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 animate-pulse'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Tên Dự Án */}
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors duration-300 mb-2">
          {project.title}
        </h3>

        {/* Mô tả */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[11px] bg-slate-800/60 text-slate-300 px-2.5 py-1 rounded-md border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/5 text-slate-400 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>

    </div>
  );
};