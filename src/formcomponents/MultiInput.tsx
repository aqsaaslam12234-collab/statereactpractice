import { useState } from "react";

const MultiInput = () => {
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    age: " ",
  });
  const hendelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
      <form className="space-y-6" onSubmit={hendelSubmit}>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create Account
        </h1>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition duration-200"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="your@example"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition duration-200"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition duration-200"
          value={formData.age}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-800 to-teal-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-teal-800 hover:to-teal-400 transform hover:scale-105 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiInput;
