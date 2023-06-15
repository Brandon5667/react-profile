import React from 'react';

export default function About() {
  return (
    <div className="about-cards"><div className="card">
    <div className="card-image">
      <figure className="image is-3by1" style={{"height": 200, "width": 200}}>
        <img src={require('../images/selfie.jpg')} alt="Placeholderimage"></img>
      </figure>
    </div>
  </div>
  <div>
      <h1 style={{ fontSize: 30, fontWeight: "bold"}}>About Page</h1>
      <p style={{fontSize: 20, margin: '1%'}}>
        I'm Brandon, a web devolpment student in the UNC web devolpment bootcamp.
        I am learning full stack devolpment in the MERN stack enviroment. I have worked 
        with technolgies such as HTML, CSS, Javascript. With those I have worked with frameworks
        like Node, express.js, React, handlebars and bulma. Using MySQL and MongoDB I have gained experiance 
        with relational and non-relational databases.
      </p>
      </div>
    </div>
  );
}
