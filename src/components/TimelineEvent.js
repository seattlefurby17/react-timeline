import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
// import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  return (
    <div className='timeline-event'>
      <h3 className="event-person">{props.person}</h3>
      <span className='event-status'>
        {props.status}
      </span>
      <span className='event-time'>
        <Timestamp time={props.timeStamp}/>
      </span>
    </div>
  );
};

// TimelineEvent.propTypes = {
//   person: PropTypes.string.isRequired,
//   timeStamp: PropTypes.instanceOf(Date)
// };

export default TimelineEvent;
