import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { ChevronRight } from 'lucide-react'
export default function Card({title, description, image}: {title: string, description: string, image:string | StaticImageData}) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center w-full h-full min-h-[420px] max-w-[364px]">
    <Image src={image} alt={title} width={332} height={200} className="rounded-lg mb-4 object-cover" />
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600 flex-1">{description}</p>
    <button className="group bg-[#3E1492] text-white px-6 py-3 rounded-md cursor-pointer flex items-center gap-2 mt-6 shadow-md  transition-transform w-full justify-center ">
  learn more
  <ChevronRight className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:rotate-90" />
</button>
  </div>
  )
}
