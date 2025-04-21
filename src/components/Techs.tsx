type TechsProps = {
    logos: string[],
    name: string
  }
  
  export default function Techs({ logos, name }: TechsProps) {
    
    return(
        <div className="px-5">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <div className="overflow-hidden">
                <div className="flex animate-scrollX gap-5 w-115">
                {[...logos, ...logos].map((i, index) => (
                    <img key={index} className="w-10" src={i} />
                ))}
                </div>
            </div>
        </div>
    )
}