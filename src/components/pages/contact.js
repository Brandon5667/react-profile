import React from 'react';

export default function Contact() {
  return (
    <div className='contact-page'>
      
      <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Text input"></input>
  </div>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" ></input>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  
</div>


<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>





<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>
      <p>
      <div className="card-image" style={{width: "10%"}}>
                    <figure className="image is-4by3">
                        <img src={require('../images/envelope.png')} alt="mail icon"></img>
                    </figure>
                <div/>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">Brandon Cullifer</p>
                            <a href="mailto:brandon.cullifer@gmail.com">Brandon.Cullifer@gmail.com</a>
                        </div>
                    </div>

                    
                </div>
            </div>
      </p>
    </div>
  );
}