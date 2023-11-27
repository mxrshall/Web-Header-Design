import { motion } from "framer-motion"
import Bar from "./Bar";

function HeaderText() {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col">
            <div className="w-1/2 h-40 flex items-end text-white font-ds -mb-16 ml-5">
                <motion.p className="text-white text-[16rem] font-ds" animate={{y: 0, opacity: 1}} initial={{y: 20, opacity: 0}} transition={{duration: 0.8, delay: 1}}>Japan</motion.p>
            </div>
            <Bar/>
            <div className="w-1/2 flex justify-end items-center mp-5">
                <motion.p className="text-white text-2xl font-ds" animate={{y: 0, opacity: 1}} initial={{y: -20, opacity: 0}} transition={{duration: 0.8, delay: 1}}>city of future</motion.p>
            </div>
        </div>
    )
  }
  
  export default HeaderText