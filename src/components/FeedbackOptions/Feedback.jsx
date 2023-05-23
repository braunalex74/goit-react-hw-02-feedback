import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  <div>
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Good</button>
    <button onClick={() => onLeaveFeedback('bad')}>Good</button>
  </div>;
};
