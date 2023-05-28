import React from 'react';
import { SectionStyles } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <h2>{title}</h2>
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
