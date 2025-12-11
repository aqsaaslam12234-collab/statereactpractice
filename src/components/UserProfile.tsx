import { useState } from "react"


const UserProfile = () => {
    const [name, setName] = useState ("Guest")
    const [age, setAge] = useState (18)
  return (
    <div className="bg-white shadow w-80 h-60 content-center justify-center items-center">
       

        <h1 className="font-bold">Name: {name}</h1>
        <h3 className="font-bold mb-5">Age: {age}</h3>
      <button className="bg-teal-700 border w-30 h-10 font-bold text-white" onClick={() => setName("Aqsa Aslam")}>Change Name</button>
      <button className="bg-teal-700 border w-30 h-10 font-bold text-white" onClick={() => setAge(age + 1)}>Change Age</button>
        
    </div>
  )
}

export default UserProfile
