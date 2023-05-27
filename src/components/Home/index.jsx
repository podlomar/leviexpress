import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey === null ? null : (
        <div className="container">
          Nalezeno spojení s id {journey.journeyId}
        </div>
      )}
    </main>
  );
};
