import React from "react";

const ProduceScores = (props) => {
  // let sortType = props.JSKsortType;
  const listCountries = props.listOfCountries.map((eachCountry, index) => {

    // render the result
    return (
      <div key={index} className="country">
        {countryName(eachCountry.countryName)}
        {renderTheScores(eachCountry.scores)}
      </div>
    );
  });
  return listCountries;
};

// The Country Heading
function countryName(theCountryName) {

  return (
    <h2 className="bluepen">{`HIGH SCORES: ${theCountryName}`}</h2>
  );
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
    <p key={index} className="leftblack">
      {element.scorerName}
    </p>
  ));

  // render the result
  return <div>{listNames}</div>;
}

function renderEachScore(scorers) {
  // Produce a list of Scores
  const listScores = scorers.map((element, index) => (
    <p key={index} className="rightbrown">
      {element.scorerScore}
    </p>
  ));

  // render the result
  return <div>{listScores}</div>;
}

export default ProduceScores;
