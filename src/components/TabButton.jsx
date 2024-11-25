import PropTypes from 'prop-types';

TabButton.propTypes = {
    children: PropTypes.string,
    onSelect: PropTypes.func
  };

  export default function TabButton({ children, onSelect }) {
    return (
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
    );
  }
