import React from 'react';
import { SectionStyles } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <h2>{title}</h2>
      {children}
    </SectionStyles>
  );
};
