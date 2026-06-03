import React from 'react'

const linkInfomation = ({id}) => {
  return (
  <section id={id} className="py-16 px-8">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-4 mb-10">
      <div className="w-12 h-0.5 bg-blue-500"></div>
      <h2 className="text-2xl font-bold text-white">Lets Connect</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <a href="#" className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow group">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
          <img className="rounded-[50%]" src="https://res.cloudinary.com/ds11ggie4/image/upload/v1772189167/icon-linkdin_p6vzww.png"></img>
        </div>
        <span className="font-bold text-slate-900">LinkedIn</span>
      </a>

      <a href="#" className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow group">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
        <a href="https://github.com/quekhoait"  target="_blank" >
          <img className="rounded-[50%]" src="https://res.cloudinary.com/ds11ggie4/image/upload/v1772189167/icon-github_qrabkl.svg"></img>
        </a>
        </div>
        <span className="font-bold text-slate-900">GitHub</span>
      </a>

      <a href="#" className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow group">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
        <a href="https://www.facebook.com/khoadanghocit"  target="_blank" >
          <img className="rounded-[50%]" src="https://res.cloudinary.com/ds11ggie4/image/upload/v1772189168/icon-gacebook_hiaclv.png"></img>
        </a>
        </div>
        <span className="font-bold text-slate-900">Facebook</span>
      </a>

      <a href="#" className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow group">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
        
            <a href="https://www.instagram.com/khoaw30/"  target="_blank" >
                      <img className="rounded-[50%]" src="https://res.cloudinary.com/ds11ggie4/image/upload/v1772189167/icon-ig_xl6cli.jpg"></img>
</a>
        </div>
        <span className="font-bold text-slate-900">Instagram</span>
      </a>

    </div>
  </div>
</section>
  )
}

export default linkInfomation