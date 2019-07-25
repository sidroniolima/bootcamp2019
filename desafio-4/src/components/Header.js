import React from 'react';

import avatar from '../assets/facebook-logo.png';

export default (props) => (
  <header>
    <div className="content">
      <img src={avatar} alt="Facebook logo"/>
      <span>Meu perfil</span>
    </div>
  </header>
);