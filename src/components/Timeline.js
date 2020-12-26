import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // transform the array of data into an array of components
  const eventComponents = props.events.map((event, index) => {
    return (
      <TimelineEvent
        person={event.person}
        status={event.status}
        timeStamp={event.timeStamp}
        key={index}
      />
    );
  });
  return ( //render the array of components
    <div className='timeLine'>
      {eventComponents}
    </div>
  );
};

export default Timeline;