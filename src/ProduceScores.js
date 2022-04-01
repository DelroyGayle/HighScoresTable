import React from "react";
import { useState } from "react";

// Note that the array is sorted in place
function sortByScoresDesc(a, b) {
  return b.s - a.s;
}

const ProduceScores = (props) => {
  const [sortOrder, setSortOrder] = useState(0);

  const listCountries = props.theScores.map((eachCountry, index) => {
    const copiedScores = [...eachCountry.scores]; // make a copy of the scores for each country
    copiedScores.sort(sortByScoresDesc); // sort in descending order

    if (!sortOrder) {
                      setSortOrder([...copiedScores]);
                      DescendingOrder = [...copiedScores];
                      console.log(DescendingOrder);
                      copiedScores.sort(sortByScoresAscend); // sort in ascending order
                      AscendingOrder = [...copiedScores];
                      console.log(AscendingOrder);
    }



    // render the result
    return (
      <div key={index} className="country">
        {countryName(eachCountry)}
        {renderTheScores(copiedScores)}
      </div>
    );
  });
  return listCountries;
};

// The Country Heading
function countryName(eachCountry) {
  return <h2 className="bluepen">{`HIGH SCORES: ${eachCountry.name}`}</h2>;
}

function renderTheScores(scorers) {
  return (
    <div className="thescores">
      <div className="row-flex2">
        {renderEachName(scorers)}
        {renderEachScore(scorers)}
      </div>
    </div>
  );
}

function renderEachName(scorers) {
  // Produce a list of Names
  const listNames = scorers.map((element, index) => (
    <p key={index} className="rightblack">
      {element.n}
    </p>
  ));

  // render the result
  return <div>{listNames}</div>;
}

function renderEachScore(scorers) {
  // Produce a list of Scores
  const listScores = scorers.map((element, index) => (
    <p key={index} className="rightbrown">
      {element.s}
    </p>
  ));

  // render the result
  return <div>{listScores}</div>;
}

export default ProduceScores;
