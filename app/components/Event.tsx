import React from 'react'

const Event = ({id}) => {
  return (
  <section id={id} className=" py-16 px-8">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-4 mb-10">
      <div className="w-12 h-0.5 bg-blue-500"></div>
      <h2 className="text-2xl font-bold text-white">Sự kiện của tôi</h2>
    </div>

  <p className='center text-white'>
    Sự kiện đang được cập nhật, vui lòng quay lại sau!
  </p>
  </div>
</section>
  )
}

export default Event