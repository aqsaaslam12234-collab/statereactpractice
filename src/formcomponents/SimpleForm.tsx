import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("name,", name);
    console.log("email,", email);
  };

  return (
    <div className="bg-white shadow flex flex-row-3 w-80 h-60 rounded-2xl content-center">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold justify-center mt-5 content-center ml-5">React Simple form</h1>
        <div className="pl-5 ">

        <label className="font-bold" htmlFor="">Name:</label>
        <input
        className="ml-5 mt-4 outline-2 outline-cyan-700 rounded"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className="pl-5">

        <label className="font-bold" htmlFor="">Email:</label>
        <input
        className="ml-5 mt-4 outline-2 outline-cyan-700 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="mt-5 ">

        <button className=" bg-cyan-900 rounded-full text-white w-40 h-10 content-center" type="submit">Submit</button>
          </div>
      </form>
    </div>
  );
};

export default SimpleForm;
