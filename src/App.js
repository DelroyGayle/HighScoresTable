/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./Scores.js";
import ProduceScores from "./ProduceScores.js";
import SortButton from "./SortButton";

const descendingOrder = [],
  ascendingOrder = [],
  worldTable = [];

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
    let theScore = Number(element.s);
    descList.push({ scorerName: element.n, scorerScore: theScore });
    worldTable.push({
      score: theScore,
      country: eachCountry.name,
      name: element.n.toUpperCase(),
    });
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

// Sort the "world-wide" table in descending score order - Note that the array is sorted in place
worldTable.sort(worldWideSort).reverse();

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

// Sort the "world-wide" table
function worldWideSort(z, a) {
  if (z.score !== a.score) {
    return z.score - a.score;
  }

  if (z.country !== a.country) {
    if (z.country < a.country) {
      // done intentionally so that when I reverse the countries are in the right order
      return 1;
    } else {
      return -1;
    }
  }

  if (z.name < a.name) {
    return -1;
  } else if (z.name > a.name) {
    return 1;
  } else {
    return 0;
  }
}

const App = () => {
  const listOfCountries = sortType < 0 ? descendingOrder : ascendingOrder;

  const [sortOrder, setSortOrder] = useState(-1);

  const [worldwideDisplay, setWorldwideDisplay] = useState(true); // Worldwide Table view first

  function switchOrder() {
    setSortOrder(-sortOrder);
    sortType = -sortType;
  }

  function switchToHighScores() {
    setWorldwideDisplay(false);
  }

  // One class for 'descending', the other for 'ascending'
  let buttonClass = `button ${
    sortType < 0 ? "descending" : "ascending"
  }-button`;

  // render the result

  if (worldwideDisplay) {
    return (
      <div className="flex-centre ">
        <h1 className="redheading">WORLDWIDE TABLE</h1>
        <div className="wwbox">
          <div className="redfont">COUNTRY</div>
          <div className="redfont">NAME</div>
          <div className="redfont">SCORE</div>
          {displayScores()}
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>
            <button className="button" onClick={switchToHighScores}>
              Proceed to High Scores per Country
            </button>
          </div>
        </div>
      </div>
    );
  } else {
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
  }
};

function displayScores() {
  // Convert to a linear list
  const linearList = [];
  worldTable.forEach((element) => {
    linearList.push(<div className="bluefont">{element.country}</div>);
    linearList.push(<div className="blackfont">{element.name}</div>);
    linearList.push(<div className="brownfont">{element.score}</div>);
  });

  return linearList;
}

export default App;
