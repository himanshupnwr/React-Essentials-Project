import PropTypes from 'prop-types';

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
  };

export default function Section({ title, children, ...props }) {
    return (
      <section {...props}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
