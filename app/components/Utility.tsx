import React from 'react'

const Utility = ({id}) => {
  return (
  <section id={id} className=" py-16 px-8">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-4 mb-10">
      <div className="w-12 h-0.5 bg-blue-500"></div>
      <h2 className="text-2xl font-bold text-white">Tiện ích cho bạn</h2>
    </div>

  <p className='center text-white'>
    Hiện tại đang phát triển
  </p>
  </div>
</section>
  )
}

export default Utility