import React from 'react'
import ProjectItemComponents from '../about-us/projectItemComponent'

const projectComponents = () => {
  return (
  <section className="pb-16 pt-4 px-8">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-4 mb-10">
      <div className="w-12 h-0.5 bg-blue-500"></div>
      <h2 className="text-2xl font-bold text-white">My Project</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <ProjectItemComponents 
        title={"Design Web Ticket Bus"}
        description={"11"}
        tools={["Html", "css", "Javascript"]}
        link="https://quekhoait.github.io/TKW/"
      />
    </div>
  </div>
</section>
  )
}

export default projectComponents