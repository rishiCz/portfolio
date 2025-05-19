import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../redux/modalSlice'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { IoMdCheckmark } from 'react-icons/io'

const connectData = [

    { label: 'Email', value: 'rishimalik97@gmail.com' },
    { label: 'Phone', value: '+91 93286 33053' },
    { label: 'LinkedIn', value: 'linkedin.com/in/rishicz' },

]

const ConnectModal = () => {

    const isOpen = useSelector((state: any) => state.modal.isOpen)
    const [showCopy, setShowCopy] = useState(false)
    const dispatch = useDispatch()

    const modalRef = useRef<any>(null)
    const close = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target))
            dispatch(closeModal())
    }

    const copy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setShowCopy(true)
            setTimeout(() => {
                setShowCopy(false)
            }, 1000)
        });
    }

    if (!isOpen) return null

    return (
        <motion.div animate={{ backdropFilter: ['blur(1px)', 'blur(20px)'] }} onClick={close} className='w-[100svw] h-[100svh] fixed top-0 left-0 z-20 bg-[#00000050] dark:bg-[#ffffff20] flex justify-center items-center cursor-pointer'>
            {<motion.div initial={{bottom:'-50px'}} animate={{ bottom: showCopy ? ['-50px', '30px', '20px'] : [ '-50px'] }} transition={{ duration: 0.5 }}
                className='bg-white fixed text-green-600 flex gap-2 -bottom-50 items-center p-1 px-3 rounded'>
                Copied <IoMdCheckmark />
            </motion.div>}
            <motion.div initial={{ height: '0' }} animate={{ height: 'auto' }} ref={modalRef} className='bg-white overflow-hidden cursor-default rounded-xl shadow dark:bg-black'>
                <h1 className='m-4 mb-0 text-2xl'>Connect with Me</h1>
                <h2 className='ms-4 text-sm text-[#747474]'> -- click to copy</h2>

                <div className='m-5 grid grid-cols-[100px_1fr] gap-4 gap-x-8 items-center'>
                    {connectData.map(({ label, value }) => <>
                        <div className='theme-gradient flex p-[1px] rounded'>
                            <button onClick={() => copy(value)}
                                className=' active:translate-0.5 cursor-pointer hover:text-white transition-all hover:bg-transparent font-semibold text-center bg-white dark:bg-black w-full px-2 py-1 rounded tracking-wide'>
                                {label}
                            </button>
                        </div>

                        <p className='cursor-text border rounded px-2 py-1'>{value}</p>
                    </>)}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ConnectModal