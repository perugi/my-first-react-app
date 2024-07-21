import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;

  const handleNext = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const selectedSculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handlePrev} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNext} disabled={!hasNext}>
        Next
      </button>

      <h1>
        <em>{selectedSculpture.name}</em> by {selectedSculpture.artist}
      </h1>
      <p>
        {index + 1} of {sculptureList.length}
      </p>

      <button onClick={toggleDetails}>
        {showDetails ? "Hide details" : "Show details"}
      </button>

      {showDetails && <p>{selectedSculpture.description}</p>}

      <img src={selectedSculpture.url} alt={selectedSculpture.alt} />
    </div>
  );
}
