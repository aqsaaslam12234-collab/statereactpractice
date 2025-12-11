import { useState } from "react"

const InputExample = () => {
    const [name, setName] = useState ("")
  return (
    <div> 
      <input className="border w-80 h-10 border-black rounded" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <p>Assalam U Alaikum {name || "Guest"}</p>
    </div>
  )
}

export default InputExample
