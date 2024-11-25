import PropTypes from 'prop-types';

TabButton.propTypes = {
    children: PropTypes.string,
  };

export default function TabButton({ children }) {
    return (
      <li>
        <button>{children}</button>
      </li>
    );
  }
