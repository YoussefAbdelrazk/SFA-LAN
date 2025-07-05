

export default function FlexComponent({title, description, icon}: {title: string, description: string, icon: React.ReactNode}) {
  return (
    <div>
      <div className='flex items-center gap-2'>
        {icon}
        <h3 className="font-bold text-lg text-[#344054]">{title}</h3>
      </div>
      <div>

        <p className="text-base text-[#475467]">{description}</p>
      </div>
    </div>
  )
}
