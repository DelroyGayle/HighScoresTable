/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import "./App.css";
import allCountryScores from "./Scores.js";
import ProduceScores from "./ProduceScores.js";

let DescendingOrder = null,
    AscendingOrder = null,
    sortType = -1;

// Sort the Country Names
function countryNameSort(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

function switchSort() {
  sortType = -sortType;
}

const App = () => {
  // Sort the Country Names in alphabetical order - Note that the array is sorted in place
  allCountryScores.sort(countryNameSort);

  // render the result

  return (
    <div>
      <div>
        <button onClick={switchSort}>Click me</button>
      </div>
      <br></br>
      <div className="flex-centre">
        <div className="flexchild">
          <h1 className="title">High Scores per Country</h1>
          <ProduceScores theScores={allCountryScores} />
        </div>
      </div>
    </div>
  );
};

export default App;
