import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    interests: [],
    country: "",
    terms: false,
  });
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleInputChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSelectedCountry(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    let newArray = [...form.interests, event.target.value];
    if (form.interests.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setForm({ ...form, interests: newArray });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="space-y-4 bg-yellow-700 p-10 rounded-md shadow-lg text-white w-full max-w-md mb-6"
    >
      <label className="block">
        <span>Full Name:</span>
        <input
          type="text"
          name="fullName"
          onChange={handleInputChange}
          placeholder="Full Name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
          autoComplete="name"
        />
      </label>
      <label className="block">
        <span>Email:</span>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder="Email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
          autoComplete="email"
        />
      </label>
      <label className="block">
        <span>Phone Number:</span>
        <input
          type="text"
          name="phoneNumber"
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
          autoComplete="tel"
        />
      </label>
      <div className="block">
        <span>Gender:</span>
        <div className="mt-2 space-x-2">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleInputChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleInputChange}
            />
            Other
          </label>
        </div>
      </div>
      <div className="block">
        <span>Interests:</span>
        <div className="mt-2 space-x-2">
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Sports"
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Music"
              onChange={handleCheckboxChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="interests"
              value="Travel"
              onChange={handleCheckboxChange}
            />
            Travel
          </label>
        </div>
      </div>
      <label className="block">
        <span>Country:</span>
        <select
          name="country"
          value={selectedCountry}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
          autoComplete="country-name"
        >
          <option value="" disabled>
            Select your Country
          </option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="inline-flex items-center space-x-2">
        <input
          type="checkbox"
          name="terms"
          onChange={(e) => setForm({ ...form, terms: e.target.checked })}
        />
        <span>Accept Terms and Conditions</span>
      </label>
      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
