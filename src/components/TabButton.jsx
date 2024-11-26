import PropTypes from 'prop-types';

TabButton.propTypes = {
    children: PropTypes.string,
    onSelect: PropTypes.func,
    isSelected: PropTypes.bool
  };

  export default function TabButton({ children, onSelect, isSelected }) {
    return (
      <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
      </li>
    );
  }
