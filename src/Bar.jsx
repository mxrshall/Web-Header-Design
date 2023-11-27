import { motion } from "framer-motion"

function Bar() {
    return (
        <div className="w-1/2 flex justify-center items-center flex-row">
            <div className="w-1/2 h-1 flex justify-end">
                <motion.div className="w-0 h-1 bg-white" animate={{width: "100%"}} transition={{duration: 0.5, delay: 0.3}}></motion.div>
            </div>
            <motion.div className="w-2 h-2 rounded-full bg-white mx-1" animate={{ scale: 1 }} initial={{scale: 0}} 
            transition={{ type: 'spring' }}></motion.div>
            <div className="w-1/2 h-1">
                <motion.div className="w-0 h-1 bg-white" animate={{width: "100%"}} transition={{duration: 0.5, delay: 0.3}}></motion.div>
            </div>
        </div>
    )
}

export default Bar