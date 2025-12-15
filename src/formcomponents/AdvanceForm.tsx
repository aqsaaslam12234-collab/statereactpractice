import { useState } from "react"

const AdvanceForm = () => {
  const [formData, setFormData] = useState ({
    gender="",
    agree=false,
    country="Pakistan"
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  }
  const handleChange 


  return (
    <div className="bg-gray-200 shadow rounded-2xl w-90 h-80 content-center">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold">Login Form</h2>
        <label htmlFor="">
            <input 
            type="radio" 
            name="gender" 
            value="Male"  
            />
            Male
        </label>
        <br />
        <label htmlFor="">
            <input type="radio" name="gender" value="Female"  />
            FeMale
        </label>
        <br />
        <label htmlFor="">
            <select name="country" id="country">
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="United State">United State</option>
                <option value="Turkish">Turkish</option>
                <option value="China">China</option>
            </select>
        </label>
        <br />
        <label htmlFor="">
            <input type="checkbox" name="agree" />
            I agree to terms and conditions
        </label>
        <br />
        <button className="bg-blue-600 mt-5 font-bold text-white w-80 h-10 rounded-2xl" type="submit">Submit</button>
        
        
      </form>
    </div>
  )
}

export default AdvanceForm
