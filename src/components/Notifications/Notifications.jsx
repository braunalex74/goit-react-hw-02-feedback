import React from 'react';
import { css } from '@emotion/react';

export const Notification = ({ message }) => {
  const notificationStyles = css`
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
  `;

  return (
    <div css={notificationStyles}>
      <p>{message}</p>
    </div>
  );
};

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const statisticsStyles = css`
    margin-bottom: 10px;
  `;

  return (
    <div css={statisticsStyles}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
