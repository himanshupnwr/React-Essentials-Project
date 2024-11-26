import PropTypes from 'prop-types';

Tabs.propTypes = {
    children: PropTypes.any,
    buttons: PropTypes.any,
    ButtonsContainer: PropTypes.string
  };

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    return (
      <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
      </>
    );
  }
