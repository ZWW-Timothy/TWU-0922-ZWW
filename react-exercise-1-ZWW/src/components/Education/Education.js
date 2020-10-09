import React from 'react';
import PropTypes from 'prop-types';
import './Education.css';

const Education = ({ year, title, content }) => {
  return (
    <section className="Education">
      <aside>
        <h4>{year}</h4>
      </aside>
      <article>
        <h4>{title}</h4>
        <p>{content}</p>
      </article>
    </section>
  );
};

Education.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Education;
