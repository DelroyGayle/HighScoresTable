/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./Scores.js";
import ProduceScores from "./ProduceScores.js";
import SortButton from "./SortButton";

const descendingOrder = [],
  ascendingOrder = [];

let sortType = -1;

// Sort the Country Names in alphabetical order - Note that the array is sorted in place
allCountryScores.sort(countryNameSort);

allCountryScores.forEach((eachCountry) => {
  // Sort the Scores
  let descList = [],
    ascList = [];
  // Go through each score
  for (let eachObject in eachCountry.scores) {
    let element = eachCountry.scores[eachObject];

    // Perform Descending Order First - convert any strings into numbers
    descList.push({ scorerName: element.n, scorerScore: Number(element.s) });
  }
  descList.sort(sortByScoresDesc); // sort in descending order
  ascList = [...descList].reverse(); // By 'reverse' we have the sort in ascending order
  // Add results to final lists under the relevant country
  descendingOrder.push({
    countryName: eachCountry.name,
    scores: [...descList],
  });
  ascendingOrder.push({ countryName: eachCountry.name, scores: [...ascList] });
});

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

// Note that the array is sorted in place
function sortByScoresDesc(a, b) {
  return b.scorerScore - a.scorerScore;
}

const App = () => {
  const listOfCountries = sortType < 0 ? descendingOrder : ascendingOrder;

  const [sortOrder, setSortOrder] = useState(-1);

  function switchOrder() {
    setSortOrder(-sortOrder);
    sortType = -sortType;
  }

  // One class for 'descending', the other for 'ascending'
  let buttonClass = `button ${
    sortType < 0 ? "descending" : "ascending"
  }-button`;

  // render the result
  return (
    <div>
      <div className="container">
        <div className="child">
          {/* EG <button className="button descending-button" onClick={switchOrder}> */}
          <button className={buttonClass} onClick={switchOrder}>
            Order
          </button>
          <hr></hr>
        </div>
      </div>

      <div className="flex-centre">
        <div className="flexchild">
          <h1 className="title">High Scores per Country</h1>

          <ProduceScores listOfCountries={listOfCountries} />
        </div>
      </div>
      <SortButton buttonClass={buttonClass} switchOrder={switchOrder} />
    </div>
  );
};

export default App;
