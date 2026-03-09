import React from 'react'

const overviewMe = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center p-6">

      <div className="max-w-2xl w-full text-center">
        
        <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-black/10 blur-2xl rounded-3xl transform translate-y-4 scale-95"></div>
            <img 
                src="https://res.cloudinary.com/ds11ggie4/image/upload/v1772710768/anh2_b3tuu7.jpg" 
                alt="Alex Profile" 
                className="relative w-64 h-80 object-center rounded-[2rem] border-4 border-white shadow-sm"
            />
        </div>

        <div className="space-y-2">
            <h3 className="text-blue-500 font-bold tracking-widest text-3xl uppercase">
                Designer & Developer
            </h3>
            <p className="text-white text-xl max-w-lg mx-auto leading-relaxed">
                Hãy liên hệ với tôi
            </p>
        </div>
      </div>
    </div>
  )
}

export default overviewMe