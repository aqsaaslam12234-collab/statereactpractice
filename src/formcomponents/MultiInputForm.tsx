import { useState } from "react";

const MultiInputForm = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formdata);
  };
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="h-min-screen bg-gradient-to-r from-teal-400 via-teal-700 to-teal-900 flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">Fill in your details to get started</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-left text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter you full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition duration-200"
                value={formdata.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition duration-200 "
                value={formdata.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-left text-sm font-medium text-gray-700 mb-2"
              >
                Aga
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter your age"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition duration-200"
                value={formdata.age}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-800 to-teal-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-teal-800 hover:to-teal-400 transform hover:scale-105 transition duration-200"
            >
              Submit
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?
              <a href="#" className="text-teal-800 font-medium hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiInputForm;
