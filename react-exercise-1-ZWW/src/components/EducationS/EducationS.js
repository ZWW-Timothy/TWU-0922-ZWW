import React, { Component } from 'react';
import Education from '../Education/Education';
import './EducationS.css';

class EducationS extends Component {
  state = {
    educations: [
      {
        id: 1,
        year: 1990,
        title: 'I was born in Katowice',
        content:
          'Lorem ipsum dolor sit amet, comsectetur adipisicing edit. Sapients, exercitationem, totam, dolores iste dolore est aut modi.',
      },
      {
        id: 2,
        year: 2005,
        title: 'Secondary school specializing in artisitic',
        content:
          'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluotatibus.',
      },
      {
        id: 3,
        year: 2009,
        title: 'First level graduation in Graphic Design',
        content:
          'Aspernatur, mollitia, quos maxime eius suscioit sed beatae ducimus quaerat quibusdam perferendis? Lusto, quibusdam asperiores unde repellat.',
      },
      {
        id: 4,
        year: 2012,
        title: 'Second level graduation in Graphic Design',
        content: 'Ducimus, aliquam tepore autem iatque et accusantium!',
      },
    ],
  };

  render() {
    return (
      <section className="EducationS">
        <h3>EDUCATION</h3>
        <section>
          {this.state.educations.map((education) => (
            <Education
              key={education.id}
              year={education.year}
              title={education.title}
              content={education.content}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default EducationS;
