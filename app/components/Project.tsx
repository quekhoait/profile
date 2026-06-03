"use client";

import { ProjectCard, ProjectData } from '@/components/ui/ProjectItem';
import React from 'react';


interface ProjectProps {
  id: string;
}

const Project = ({id}: ProjectProps) => {

  const projects: ProjectData[] = [
    {
      id: 1,
      title: "Giao diện web đặt vé xe trực tuyến",
      description: "Xây dựng giao diện web đặt vé xe trực tuyến hiện đại",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/quekhoait/InterfaceBus.git",
      demoUrl: "https://yourdemo.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "System Web Food Online",
      description: "Xây dựng hệ thống web đặt đồ ăn trực tuyến với giao diện thân thiện.",
      tags: ["React", "MongoDB", 'Node.js'],
      githubUrl: "https://github.com/quekhoait/WebFood.git",
      // demoUrl: "https://yourdemo.com",
      status: "In Progress"
    },
    {
      id: 3,
      title: "System web coffee online",
      description: "Xây dựng hệ thống web đặt cà phê trực tuyến với giao diện thân thiện. Với nhiều vai trò khác nhau như khách hàng, nhân viên và quản lý.",
      tags: ["Flask", "MySQL", 'Tailwind CSS'],
      githubUrl: "https://github.com/quekhoait/System-Web-Coffe.git",
      demoUrl: "https://yourportfolio.com",
      status: "Completed"
    },
    {
      id: 4,
      title: "System web film online",
      description: "Xây dựng hệ thống web đặt phim trực tuyến với giao diện thân thiện. Với nhiều vai trò khác nhau như khách hàng, nhân viên và quản lý.",
      tags: ["Flask", "MySQL", 'Tailwind CSS'],
      githubUrl: "https://github.com/quekhoait/System-Web-Coffe.git",
      demoUrl: "https://yourportfolio.com",
      status: "Completed"
    },
     {
      id: 5,
      title: "App job online",
      description: "Xây dựng hệ thống ứng dụng tìm việc làm trực tuyến với giao diện thân thiện. Với nhiều vai trò khác nhau như khách hàng, nhân viên và quản lý.",
      tags: ["React Native", "Django","MySQL", 'Tailwind CSS'],
      githubUrl: "https://github.com/quekhoait/Job-Posting.git",
      demoUrl: "https://yourportfolio.com",
      status: "Completed"
    },
     {
      id: 6,
      title: "Clone Locket",
      description: "Clone ứng dụng Locket với các tính năng tương tự.",
      tags: ["React Native", "Django","MySQL", 'Tailwind CSS'],
      githubUrl: "https://github.com/quekhoait/FlashyApp.git",
      demoUrl: "https://yourportfolio.com",
      status: "In Progress"
    }
  ];

  return (
    <section id={id} className="py-16 px-8 ">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-0.5 bg-blue-500"></div>
          <h2 className="text-2xl font-bold text-white">Dự án của tôi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;