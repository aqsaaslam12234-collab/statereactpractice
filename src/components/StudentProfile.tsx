import { useState } from "react"


const StudentProfile = () => {
    const [student, setStudent] = useState ({
        name: "Ali",
        grade: "A",
        city: "Lahore"
    })
    const changeCity = () => {

        setStudent({...student, city : "Faisalabad"})
    }
    
  return (
    <div className="bg-amber-200 shadow h-40 w-80 justify-around content-center">
        <h1 className="font-mono ">Name: {student.name}</h1>
        <p className="font-mono ">Grade: {student.grade}</p>
        <h2 className="font-mono ">City: {student.city}</h2>
        <button className="bg-teal-900 text-white rounded shadow mt-5 w-40 h-10" onClick={changeCity}>Change City</button>
      
    </div>
  )
}

export default StudentProfile
