import { motion } from "framer-motion"
import HeaderText from "./HeaderText"

function Header() {
  return (
    <motion.div className="w-full h-[100vh] bg-[url('./images/background.gif')] bg-cover">
        <div className="w-full h-[100vh] bg-black bg-opacity-70 flex items-center justify-center">
          <HeaderText/>
        </div>
    </motion.div>
  )
}

export default Header