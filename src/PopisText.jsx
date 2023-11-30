import { motion } from "framer-motion"

function PopisText() {
  return (
    <motion.div className="text-white font-ds w-8/12 flex justify-end flex-col items-end pb-12 px-5">
      <h1 className="text-7xl pb-12 pr-2">Night in Japan</h1>
        <span className="text-xl">
          In urban areas like Tokyo, Osaka, and Kyoto, you'll find a vibrant nightlife with numerous entertainment options. Restaurants, bars, izakayas (Japanese pubs), and nightclubs cater to various tastes. Many establishments stay open late, offering a wide range of experiences, from enjoying traditional sake in a quiet izakaya to dancing in a high-energy nightclub.
          <br/>
          <br/>
          In addition to the bustling urban nightlife, Japan has beautiful traditional events and festivals that can occur at night. Lantern festivals, illuminated cherry blossom viewing events, and traditional performances often take place after sunset.
          <br/>
          <br/>
          Japan is also known for its futuristic cityscapes with dazzling neon lights, especially in places like Akihabara in Tokyo. This creates a unique and visually stunning atmosphere, showcasing the blend of modern technology and traditional culture.        
        </span>
    </motion.div>
  )
}

export default PopisText