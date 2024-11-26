import PropTypes from 'prop-types';

Tabs.propTypes = {
    children: PropTypes.any,
    buttons: PropTypes.any,
  };

export default function Tabs({ children, buttons }) {
    return (
      <>
        <menu>{buttons}</menu>
        {children}
      </>
    );
  }
