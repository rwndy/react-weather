import React from 'react';

const SeasonConfig = {
  summer: {
    text: 'Saatnya ke Pantai!',
    icons: 'sun',
    size: 'huge',
    colors: 'yellow'
  },
  winter: {
    text: 'Dingin banget hari ini',
    icons: 'snowflake',
    size: 'huge',
    colors: 'blue'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9 ) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icons, size, colors } = SeasonConfig[season];
  return (
    <div>
      <h1>Current season is: { season }</h1>
      <h3>{text}</h3>
      <i className={` ${size} ${colors} ${icons} icon`}/>
    </div>
  );
};

export default SeasonDisplay;