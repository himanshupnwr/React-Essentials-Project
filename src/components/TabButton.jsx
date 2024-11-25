import PropTypes from 'prop-types';

TabButton.propTypes = {
    children: PropTypes.string,
  };

export default function TabButton({ children }) {
  function handleClick() {
    console.log('Hello World!');
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
