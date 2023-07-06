import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [multiFiles, setMultiFiles] = useState<File[]>([]);
  const [geolocationStatus, setGeolocationStatus] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const setGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const geolocationString = `${latitude}, ${longitude}`;
          setGeolocationStatus(geolocationString);
          console.log("latitude is: ",latitude);
          console.log("longitude is: ",longitude);
        },
        (error) => {
          console.log("Error getting geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const handleMultiFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length <= 5) {
      setMultiFiles(files);
    } else {
      alert("Maximum 5 files allowed");
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form submission logic here
    console.log("name: ", geolocationStatus);

    setIsFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex flex-col pt-40 items-center  w-36  bg-gray-300">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            onClick={()=>setStep(num)}
            className={`flex m-3 items-center justify-center text-lg font-mono text-white ${
              step === num ? "bg-blue-500" : "bg-gray-500"
            }`}
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "50%",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="flex-grow flex flex-col justify-center items-center border-2-blue-500">
        <h1 className="text-3xl font-bold mb-4">Multi-Step Form</h1>
        <form onSubmit={handleFormSubmit} className="w-full max-w-lg">
          {step === 1 && (
            <div>
              <label htmlFor="name" className="block mb-3 text-lg border-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />

              <label htmlFor="email" className="block mb-3 text-lg border-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />

              <label htmlFor="phone" className="block mb-3 text-lg border-lg">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label htmlFor="addressLine1" className="block mb-3 text-lg border-lg">
                Address Line 1
              </label>
              <input
                type="text"
                id="addressLine1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />

              <label htmlFor="addressLine2" className="block mb-3 text-lg border-lg">
                Address Line 2
              </label>
              <input
                type="text"
                id="addressLine2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />

              <label htmlFor="city" className="block mb-3 text-lg border-lg">
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />

              <label htmlFor="state" className="block mb-3 text-lg border-lg">
                State
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />

              <label htmlFor="pincode" className="block mb-3 text-lg border-lg">
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />

              <label htmlFor="country" className="block mb-3 text-lg border-lg">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-300 mb-4 p-2 rounded w-full"
                required
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <div className="mb-6">
                <label htmlFor="file" className="block mb-3 text-lg border-lg">
                  File Upload (PNG or PDF)
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="hidden"
                    accept=".png,.pdf"
                    required
                  />
                  <label
                    htmlFor="file"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                  >
                    Choose File
                  </label>
                  {file && <p className="ml-4">{file.name}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="multiFiles" className="block mb-3 text-lg border-lg">
                  Multiple File Upload (PNG or PDF)
                </label>
                <div className="mb-4">
                  <input
                    type="file"
                    id="multiFiles"
                    onChange={(e) =>
                      handleMultiFileChange
                    }
                    className="hidden"
                    accept=".png,.pdf"
                    multiple
                    required
                  />
                  <label
                    htmlFor="multiFiles"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                  >
                    Choose Files
                  </label>
                  {multiFiles.length > 0 && (
                    <ul className="list-disc ml-8">
                      {multiFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePreviousStep}
                  className="mr-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="flex flex-col items-center">
                <p className="text-lg font-semibold mb-4">Geolocation Status</p>
                <div className="flex items-center mb-4">
                  {geolocationStatus ? (
                    <>
                      <svg
                        className="w-6 h-6 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5-2 4-2 4 2 4 2" />
                        <path d="M9.7 9.4L12 12l2.3-2.3" />
                      </svg>
                      <p className="text-green-500">{geolocationStatus}</p>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={setGeolocation}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Capture Geolocation
                    </button>
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="mr-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Previous
                  </button>
                  {geolocationStatus && (
                    <button
                      type="submit"
                      onClick={handleNextStep}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <div className="flex flex-col items-center">
                <svg
                  className="w-16 h-16 text-green-500 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5-2 4-2 4 2 4 2" />
                  <path d="M9.7 9.4L12 12l2.3-2.3" />
                </svg>
                {isFormSubmitted && <p className="text-lg font-semibold text-center mb-4">
                  Form submitted successfully!
                </p>}
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
