
const GradientText = ({text}:{text:string}) => {
  return (
    <div className="flex items-center gap-2 ">
        
        <p className=" border-[#4807fa] dark:border-[#3f7c90] dark:text-[#b8b8b8] my-1 ps-2 border-l-2 max-w-[1000px]">{text}</p>
    </div>
    
  )
}

export default GradientText