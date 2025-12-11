import { useState } from "react"

const ToggleText = () => {
  const [isvisible, setIsVisible] = useState (false)
  return (
    <div>
      <button className="bg-teal-800 w-30 h-10 mt-10 rounded font-bold text-white" onClick={() => setIsVisible(!isvisible)}>
        {isvisible ? "hide" : "Show"} Text
      </button>
      {isvisible && <p>This text is visible </p>}
      
    </div>
  )
}

export default ToggleText
