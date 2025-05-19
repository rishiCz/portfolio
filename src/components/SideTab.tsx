import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdContactPage } from "react-icons/md"
import { SiLeetcode } from "react-icons/si"

const items = [
{ Icon: SiLeetcode, title: 'Leetcode', link: 'https://leetcode.com/u/Czar_AE/' },
{ Icon: FaGithub, title: 'GitHub', link: 'https://github.com/rishiCz' },
{ Icon: FaLinkedinIn, title: 'LinkedIn', link: 'https://www.linkedin.com/in/rishicz/' },
{ Icon: MdContactPage, title: 'Resume', link: 'https://drive.google.com/file/d/1KPmLGn0-agZ5KnVjP3tjT-yB9mzV-4GB/view?usp=drive_link' },
]

type Props = typeof items[0]

const SideTabItem = ({ Icon, title, link }: Props) => {
  return <a href={link} target="_blank" className="group cursor-pointer  flex">
    <Icon size={20} className="hover:text-[#ff0095] text-gray-500 hover:scale-120 transition-all" />
    <p className="w-0 ms-0 lg:group-hover:ms-2 overflow-hidden lg:group-hover:w-[70px] transition-all text-sm">
      {title}
    </p>
  </a>
}

const SideTab = () => {
  return (
    <div className="max-lg:flex-row max-lg:items-center rounded backdrop-blur bg-[#ffffff6c] dark:bg-[#00000058] p-1 flex flex-col gap-1 max-lg:gap-4 ">
      {items.map(({ Icon, title, link }, i) =>
        <>
          <SideTabItem key={i} Icon={Icon} title={title} link={link} />
          {i != items.length - 1 && <div className="h-5 w-0.5 ms-2 max-lg:hidden max-lg:w-5 theme-gradient rounded-full" />}
        </>
      )}
    </div>
  )
}

export default SideTab