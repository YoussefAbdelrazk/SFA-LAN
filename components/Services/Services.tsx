import React from 'react'
 import { Card } from '@/components/ui/Card'
import { services } from '@/data/services'


export default function Services() {

  return (
    <section>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-8 md:px-12 lg:px-20'>
    <h2 className='text-5xl font-bold text-center'>
      Premium <span className='text-[#3E1492]'>Fitness Services</span>
    </h2>
    <p className='text-center text-lg text-[#475467]'>
      Tailored Workouts, Expert Guidance, and Comprehensive Programs to Meet All Your Fitness Needs
    </p>
    <div className="w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
    {services.map((service, idx) => (
      <div key={idx} className="flex justify-center h-full">
        <Card
          title={service.title}
          description={service.description}
          image={service.image}
        />
      </div>
    ))}
  </div>
</div>
  </div>
    </section>

  )
}
