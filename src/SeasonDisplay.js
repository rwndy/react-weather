import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9 ) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const expression = season === 'winter' ? 'Dingin banget hari ini' : 'Saatnya ke Pantai!';
  return (
    <div>
      <h1>Season Display: { season }</h1>
      <h3>{expression}</h3>
    </div>
  );
};

export default SeasonDisplay;