import React from "react";
import BackButton from "./BackButton";

function TextToSpeach() {
  const header = "FLATBED ASSY";
  const content = `A Flatbed is constructed over the bare chassis of the vehicle to carry all the equipment of the system.The Flatbed is a steel welded structure of size 3.9 m (L) x 2.3 m (W) which can be levelled using the four jacks fitted to it. The flatbedis fixed to the vehicle chassis using ‘U’ bolts. The length and width of the Flatbed Assembly is 3940x2300 mm.The Flatbed `;

  const [isSpeaking, setIsSpeaking] = React.useState(false);

  const handleClick = (textToSpeak) => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = textToSpeak;
    utterance.rate = 0.7;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = "en-IN";

    const handleEnd = () => {
      setIsSpeaking(false);
    };

    utterance.onend = handleEnd; // Set callback for speech end

    if (isSpeaking) {
      speechSynthesis.cancel();
    } else {
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] md-h:h-[82vh] lg-h:h-[82.7vh] xl-h:h-[83.7vh] xl-h2:h-[84.5vh] xl-h3:h-[87.7vh] 2xl-h:h-[89.5vh] 2xl-h1:h-[87vh] 2xl-h2:h-[90.6vh] 2xl-h3:h-[89vh]  bg-gradient-to-bl from-slate-900 via-[#291e44] to-slate-900 overflow-hidden ">
      <div>
        <BackButton to={"../"} />
      </div>
      <div className="container mx-auto mt-4 lg:mx-24 xl:mx-20">
        <h1 className="text-3xl font-bold mb-2 text-white">{header}</h1>
        <p className="text-lg mb-4 text-white">{content}</p>
        <div className="flex justify-between">
          <button
            onClick={() => handleClick(header)}
            className={`px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isSpeaking && "disabled opacity-50"
            }`}
          >
            Speak Header
          </button>
          <button
            onClick={() => handleClick(content)}
            className={`px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
              isSpeaking && "disabled opacity-50"
            }`}
          >
            Speak Content
          </button>
          <button
            onClick={() => handleClick("")}
            disabled={!isSpeaking}
            className="px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Stop Speaking
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextToSpeach;
