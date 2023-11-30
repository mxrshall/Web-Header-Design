import { motion } from "framer-motion"
import PopisText from "./PopisText"
import PopisZnak from "./PopisZnak"

function Popis() {
  return (
    <motion.div className="w-full h-[100vh] bg-[url('./images/background.png')] bg-cover">
        <div className="w-full h-[100vh] bg-gradient-to-b from-black to-transparent">
            <div className="w-3/5 h-[100vh] bg-black flex">
              <PopisZnak/>
              <PopisText/>
            </div>
        </div>
    </motion.div>
  )
}

export default Popis