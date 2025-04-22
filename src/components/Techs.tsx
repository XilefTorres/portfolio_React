import { motion } from "motion/react"

type TechsProps = {
    logos: string[],
    name: string
  }
  
export default function Techs({ logos, name }: TechsProps) {
    
    return(
        <div className="px-5">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <div className="overflow-hidden">
                <motion.div className="flex gap-5 w-115"
                            animate={{ x: [0, -540]}}
                            transition={{ repeat: Infinity, duration: 7, ease: "linear"}}>
                {[...logos, ...logos].map((i, index) => (
                    <img key={index} className="w-10" src={i} />
                ))}
                </motion.div>
            </div>
        </div>
    )
}