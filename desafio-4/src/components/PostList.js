import React, { Component } from 'react';
import Post from './Post';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatar: 'avatar_1.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'avatar_comments_1.png'
            },
            content: "Sim."
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Maurício Aniche',
          avatar: 'avatar_post_1.png'
        },
        date: '04 Jun 2019',
        content: 'A Udemy lançou vários cursos gratuitos!!! \n\n Corram',
        comments: [
          {
            id: 1,
            author: {
              name: 'Sabrina Chursman',
              avatar: 'avatar_comments_2.png'
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'avatar_comments_1.png'
            },
            content: "Show!!!"
          }
        ],
      }
    ]
  }

  render() {
    return (
      <section id="posts">
        <div className="content">
          {this.state.posts.map(post => <Post key={post.id} {...post}/> )}
        </div>
      </section>
    );
  }
}
