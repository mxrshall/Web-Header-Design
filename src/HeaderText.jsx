import { motion } from "framer-motion"

function HeaderText() {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col">
            <div className="w-1/2 h-40 flex items-end text-white font-ds -mb-16 ml-5">
                <p className="text-white text-[16rem] font-ds">Japan</p>
            </div>
            <div className="w-1/2 flex justify-center items-center flex-row">
                <div className="w-1/2 h-1 flex justify-end">
                    <motion.div className="w-0 h-1 bg-white" animate={{width: "100%"}} transition={{duration: 1, delay: 0.3}}></motion.div>
                </div>
                <motion.div className="w-2 h-2 rounded-full bg-white mx-1" animate={{ scale: 1 }} initial={{scale: 0}} 
                transition={{ type: 'spring' }}></motion.div>
                <div className="w-1/2 h-1">
                    <motion.div className="w-0 h-1 bg-white" animate={{width: "100%"}} transition={{duration: 1, delay: 0.3}}></motion.div>
                </div>
            </div>
            <div className="w-1/2 flex justify-end items-center text-white text-2xl font-ds mp-5">
                <p>city of future</p>
            </div>
        </div>
    )
  }
  
  export default HeaderText