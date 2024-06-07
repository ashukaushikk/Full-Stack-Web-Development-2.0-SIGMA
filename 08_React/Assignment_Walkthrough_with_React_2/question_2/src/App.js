/* eslint-disable react/style-prop-object */
import { useState } from "react";
import Button from "./components/button";

function App() {
  let [counter, setCounter] = useState(0);

  const buttonHandler = (type) => {
    if (type === "add") {
      counter = counter + 1;
      setCounter(counter);
    } else {
      if (counter === 0) {
        alert(`Sorry, the counter value will not go below zero.`);
      } else {
        counter = counter - 1;
        setCounter(counter);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full bg-black">
      <div className="flex flex-col w-96 p-5 rounded-2xl align-middle bg-[#fcff4e] items-center text-center gap-y-4 border shadow-lg shadow-teal-400">
        <h1 className="text-3xl">
          {" "}
          Counter Value :{" "}
          <span className={counter === 0 ? "text-red-700" : ""}>{counter}</span>
        </h1>
        <Button
          buttonHandler={() => buttonHandler("add")}
          buttonText={"Add Value"}
          style={
            "bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          }
        />

        <Button
          buttonHandler={() => buttonHandler("remove")}
          buttonText={"Remove Value"}
          style={
            "bg-red-400 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          }
        />
      </div>
    </div>
  );
}

export default App;
