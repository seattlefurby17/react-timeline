import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
// import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  return (
    <div className='timeLineEvent'>
      <h3>{props.person}</h3>
      <span className='eventStatus'>
        {props.status}
      </span>
      <span className='eventTime'>
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