import { PropTypes } from 'prop-types';
import { Button, ButtonContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
