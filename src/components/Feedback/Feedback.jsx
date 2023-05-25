import React, { Component } from 'react';
import { css } from '@emotion/react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

import { Statistics } from 'components/Statistics/Statistics';

import { Section } from 'components/Section/Section';

import { Notification } from 'components/Notifications/Notifications';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const hasFeedback = this.countTotalFeedback() > 0;

    const sectionStyles = css`
      margin-bottom: 20px;
      padding: 10px;
    `;

    return (
      <div>
        <Section title="Leave feedback" styles={sectionStyles}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics" styles={sectionStyles}>
          {hasFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

// import React, { useState } from 'react';

// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

// import { Statistics } from 'components/Statistics/Statistics';

// import { Section } from 'components/Section/Section';

// import { Notification } from 'components/Notifications/Notifications';

// export const Feedback = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const onLeaveFeedback = type => {
//     if (type === 'good') {
//       setGood(good + 1);
//     } else if (type === 'neutral') {
//       setNeutral(neutral + 1);
//     } else if (type === 'bad') {
//       setBad(bad + 1);
//     }
//   };

//   const countTotalFeedback = () => good + neutral + bad;

//   const countPositiveFeedbackPercentage = () => {
//     const total = countTotalFeedback();
//     return total > 0 ? Math.round((good / total) * 100) : 0;
//   };

//   const hasFeedback = countTotalFeedback() > 0;

//   return (
//     <div>
//       <Section title="Leave feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={onLeaveFeedback}
//         />
//       </Section>
//       <Section title="Statistics">
//         {hasFeedback ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     </div>
//   );
// };
