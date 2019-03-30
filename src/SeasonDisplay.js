import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig = {
  summer: {
    text: 'Saatnya ke Pantai!',
    icons: 'sun',
    size: 'massive',
    colors: 'yellow'
  },
  winter: {
    text: 'Dingin banget hari ini',
    icons: 'snowflake',
    size: 'massive',
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
    <div className={`display-season ${season}`}>
      <i className={` icon-left ${size} ${colors} ${icons} icon`}/>
      <h1 className="text">{text}</h1>
      <i className={`icon-right ${size} ${colors} ${icons} icon`}/>
    </div>
  );
};

export default SeasonDisplay;