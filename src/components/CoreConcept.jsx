import PropTypes from 'prop-types';

CoreConcept.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  };

export default function CoreConcept({ image, title, description }) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }

// Props Version
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
