import React, { useState, useEffect } from "react";

function Greeting({ name }) {
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    // Update the time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    // Initial greeting
    updateGreeting();
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    updateGreeting();
  }, [currentTime, name]);
  
  const updateGreeting = () => {
    const hour = currentTime.getHours();
    let timeGreeting;
    
    if (hour < 12) {
      timeGreeting = "Good morning";
    } else if (hour < 18) {
      timeGreeting = "Good afternoon";
    } else {
      timeGreeting = "Good evening";
    }
    
    // Add some personality based on time
    let personalizedMessage;
    if (hour < 8) {
      personalizedMessage = "You're up early today!";
    } else if (hour >= 23 || hour < 5) {
      personalizedMessage = "Working late tonight?";
    } else if (hour === 12) {
      personalizedMessage = "Time for lunch!";
    } else {
      personalizedMessage = "Hope you're having a great day!";
    }
    
    setGreeting(`${timeGreeting}, ${name}! Welcome to the Greeting App. ${personalizedMessage}`);
  };
  
  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700 relative">
      {/* Time display in top right corner */}
      <div className="absolute top-2 right-3">
        <span className="text-sm text-gray-400">{formattedTime}</span>
      </div>
      
      <div className="text-center space-y-2 pt-4">
        <p className="text-xl">{greeting}</p>
        <div className="mt-3 flex justify-center">
          <span className={`inline-block px-3 py-1 rounded-full text-xs ${
            currentTime.getHours() < 12 ? "bg-yellow-500 text-yellow-900" : 
            currentTime.getHours() < 18 ? "bg-blue-500 text-blue-900" : 
            "bg-indigo-500 text-indigo-900"
          }`}>
            {currentTime.getHours() < 12 ? "Morning" : 
             currentTime.getHours() < 18 ? "Afternoon" : "Evening"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Greeting; 