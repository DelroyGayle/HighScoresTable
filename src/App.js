import React from "react";
import "./App.css";
import allCountryScores from "./Scores.js";
import ProduceScores from "./ProduceScores.js";

// Sort the Country Names
function countryNameSort(a,b) {
  if (a.name < b.name)
      return -1;

  else if (a.name > b.name)
      return 1;
  else
      return 0;
}

const App = () => {

   // Sort the Country Names in alphabetical order - Note that the array is sorted in place
   allCountryScores.sort(countryNameSort);
   
  // render the result 
  return (
    <div className="flex-centre"> 
	    <div className="flexchild">
          <h1 class="title">High Scores per Country</h1>
          <ProduceScores theScores={allCountryScores} />
      </div>
    </div>
  );
};

export default App;
