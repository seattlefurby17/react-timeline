import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className='timeLineEvent'>
      <h3>{props.person}</h3>
      <span className='eventStatus'>
        {props.status}
      </span>
      <span className='eventTime'>
        {props.timestamp}
        </span>
    </div>
  );
};

export default TimelineEvent;