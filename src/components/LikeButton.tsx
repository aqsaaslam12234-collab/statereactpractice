import { useState } from "react"


const LikeButton = () => {
    const [liked, setLiked] = useState(false)
  return (
    <div className="bg-amber-200 shadow h-20 w-35">
        <button className=" border w-25 h-10 mt-5" onClick={() => setLiked(!liked)}>
            {liked ? "❤ Liked" : "🤍 Like"}
        </button>
      
    </div>
  )
}

export default LikeButton
