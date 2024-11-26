import PropTypes from 'prop-types';

TabButton.propTypes = {
    children: PropTypes.string,
    onSelect: PropTypes.func,
    isSelected: PropTypes.bool
  };

  export default function TabButton({ children, isSelected, ...props }) {
    return (
      <li>
        <button className={isSelected ? 'active' : undefined} {...props}>
          {children}
        </button>
      </li>
    );
  }
