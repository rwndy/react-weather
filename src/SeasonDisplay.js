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
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  return (
    <div>
      <h1>Current season is: { season }</h1>
      <h3>{expression}</h3>
      <i className={` huge yellow ${icon} icon`}/>
    </div>
  );
};

export default SeasonDisplay;