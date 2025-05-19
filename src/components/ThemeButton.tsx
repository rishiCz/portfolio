import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/themeSlice'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const ThemeButton = () => {
    const dispatch = useDispatch()
    const isDark = useSelector((state: any) => state.theme.isDark)

    const toggle = ()=>{
        dispatch(toggleTheme())
    }

    const Icon = isDark? MdLightMode : MdDarkMode
    return (
        <button onClick={toggle} className=' p-2 rounded-full border-2 cursor-pointer bg-white text-black transition-all dark:bg-black dark:text-white'>
            <Icon size={15}/>
        </button>
    )
}

export default ThemeButton