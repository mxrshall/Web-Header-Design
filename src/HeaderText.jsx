import { motion } from "framer-motion"
import Bar from "./Bar";

function HeaderText() {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center flex-col">
            <div className="w-1/2 h-40 flex items-end text-white font-ds -mb-16 ml-5">
                <p className="text-white text-[16rem] font-ds">Japan</p>
            </div>
            <Bar/>
            <div className="w-1/2 flex justify-end items-center text-white text-2xl font-ds mp-5">
                <p>city of future</p>
            </div>
        </div>
    )
  }
  
  export default HeaderText