import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

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

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
