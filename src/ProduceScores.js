import React from "react";

const ProduceScores = (props) => {
  // let sortType = props.JSKsortType;
  const listCountries = props.listOfCountries.map((eachCountry, index) => {
    // render the result
    console.log(props.listOfCountries);
    console.log(eachCountry);
    console.log(eachCountry.countryName);
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
  console.log(theCountryName);
  return (
    <h2 className="font-link bluepen">{`HIGH SCORES: ${theCountryName}`}</h2>
  );
}

function renderTheScores(scorers) {
  console.log(scorers);
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
    <p key={index} className="font-link rightblack">
      {element.scorerName}
    </p>
  ));

  // render the result
  return <div>{listNames}</div>;
}

function renderEachScore(scorers) {
  // Produce a list of Scores
  const listScores = scorers.map((element, index) => (
    <p key={index} className="font-link rightbrown">
      {element.scorerScore}
    </p>
  ));

  // render the result
  return <div>{listScores}</div>;
}

export default ProduceScores;
