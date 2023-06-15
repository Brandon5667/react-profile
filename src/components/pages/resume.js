import React from 'react';
import examplepdf from '../images/brandonsresume.pdf';

export default function Resume() {
  return (
    <div className='resume'>
      <div>
        <h2>Brandon-cullifer-resume</h2>
        <a
          href={examplepdf}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download .pdf file</button>
        </a>
      </div>
      <div className="card-image">
        <figure className="image is-6by3">
          <img src={require('../images/Brandonsresume.png')} alt="Placeholderimage">
          </img>
        </figure>
      </div>
    </div>

  );
}
