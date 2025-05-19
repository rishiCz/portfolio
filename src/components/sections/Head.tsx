import { UserCog } from "lucide-react"
import { useDispatch } from "react-redux"
import { openModal } from "../../redux/modalSlice"

const Head = () => {
  const dispatch = useDispatch()
  const open = () => {
    dispatch(openModal())
  }
  return (
    <div className="py-2 w-full h-[100svh] flex-col sm:flex-row flex gap-5 flex-wrap justify-center items-center">
      <div className=" w-fit">
        <h1 className=" text-3xl font-bold">Hey, I am <label className="gradient-text">Rishi</label></h1>
        <h2 className=" text-xl font-semibold tracking-wide">Software Engineer</h2>
        <br />
        <h3 className="max-w-[400px]">
          <label className="text-[#5200ff]">{'" '}</label>
          Delivering end-to-end solutions to complex problems with a focus on quality and scalability.
          <label className="text-[#ff00b8]">{' "'}</label>
        </h3>
        <br />
        <button onClick={open}
        className="border p-1 px-2 flex items-center gap-2 transition-all hover:border-[#5200ff] hover:bg-[#5200ff] hover:text-white active:translate-0.5 ">Connect with me
        </button>

      </div>
      <UserCog strokeWidth={0.2} size={200} />
    </div>
  )
}

export default Head