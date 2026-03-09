import { Button } from "../../components/ui/button"

const IntroduceComponent = () => {
  return (
    <div className="min-h-screen items-center justify-center pt-24 pb-8 ">
    <div className="max-w-6xl flex m-auto  w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">   
      <div className="order-2 md:order-1">      
      <p className="text-4xl font-extrabold mb-16 text-center">Xin chào bạn</p>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        Tôi là Quế Khoa <br/>
      </h1>
      
      <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed">
        Là một người nghiện code hoặc không. 
      </p>
      
      <div className="flex flex-wrap gap-4">
        <Button>Click me</Button>
      </div>
    </div>

    <div className="order-1 md:order-2 flex justify-center md:justify-end">
      <div className="relative group w-[70%]">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl">
          <img 
            src="https://res.cloudinary.com/ds11ggie4/image/upload/v1772185088/606448772_18093801767505207_2570095527280900645_n_vh1ny7.webp" 
            alt="Alex Portrait" 
            className="rounded-[2rem] w-full h-auto max-w-md object-cover aspect-[4/5]"
          />
        </div>
      </div>
    </div>

  </div>
</div>
  )
}

export default IntroduceComponent