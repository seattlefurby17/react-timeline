import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event, index) => {
    return (
      <TimelineEvent
      person={event.person}
      status={event.status}
      date={event.timestamp}
      key={index}
      />
    );
  });
  return (
    <div className='timeLine'>
      {eventComponents}
    </div>
  );
};

export default Timeline;