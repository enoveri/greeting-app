import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setShowGreeting(true);
    }
  };

  return (
    <div className="bg-gray-900 text-white w-screen min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-8">
        <div className="relative">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg p-1">
            <div className="bg-black rounded-lg p-4">
              <div className="text-center">
                <span className="text-5xl font-bold">
                  <span className="text-red-500">GREETING</span>
                  <span className="text-white">APP</span>
                </span>
                <br />
                <span className="text-5xl font-bold text-white">CHORDIFY</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 w-full h-4 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        <div className="w-full max-w-md mt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Enter your name"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-md hover:opacity-90 transition-opacity text-white font-medium"
            >
              Generate Greeting
            </button>
          </form>

          {showGreeting && <Greeting name={name} />}
        </div>
      </div>
    </div>
  );
}

export default App;
