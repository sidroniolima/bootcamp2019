import React from 'react';

export default ({author, content}) => (  
  <div className="comment">
    <img src={require(`../assets/${author.avatar}`)} alt="Avatar comment"/>
    <p><strong>{author.name}</strong> {content}</p>
  </div>
);