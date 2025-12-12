
const AdvanceForm = () => {
  return (
    <div>
      <form >
        <h2>Login Form</h2>
        <label htmlFor="">
            <input type="ratio" name="gender" value="Male"  />
            Male
        </label>
        <label htmlFor="">
            <input type="ratio" name="gender" value="Female"  />
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
        <button type="submit">Submit</button>
        
        
      </form>
    </div>
  )
}

export default AdvanceForm
