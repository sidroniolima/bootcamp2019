import React from 'react';
import Comment from './Comment';

export default ({author, date, comments, content}) => (
  <div className="post">
    <div className="body">
      <div className="info">
          <img src={require(`../assets/${author.avatar}`)} alt="Post avatar image"/>
          <div className="name">
            <strong>{author.name}</strong>
            <span>{date}</span>
          </div>
      </div>
      <p>{content}</p>
    </div>  
    <div className="comments">
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  </div>
);