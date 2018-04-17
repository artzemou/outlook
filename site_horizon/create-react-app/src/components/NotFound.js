import React, { Component }  from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="Erreur">
          <h2 className="title grey">&nbsp;</h2>
          <section className="section">
            <div>
              <p style={{color: '#166eb8', textAlign: 'center', fontSize: '1.3rem'}}>Erreur 404</p>
              <p style={{color: '#166eb8', textAlign: 'center', fontSize: '1.3rem'}}>{window.location.toString()}</p>
              <p style={{color: '#166eb8', textAlign: 'center', fontSize: '1.3rem'}}>Désolé la page n’existe pas</p>
              <p style={{color: '#166eb8', textAlign: 'center', fontSize: '1.3rem'}}><a href="/"><i className="fa fa-home" aria-hidden="true"></i> Revenir à l’accueil<span></span></a></p>
            </div>
          </section>
        </div>
      </div>


    )
  }
}
