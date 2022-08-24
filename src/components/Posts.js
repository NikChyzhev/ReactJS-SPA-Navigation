import React, { Component } from 'react'
import { posts } from '../posts';
import Header from './Header';

export default class Posts extends Component {
  render() {
    const baseUrl = this.props.location.pathname;
    const stylePost = {
      backgroundColor: 'gray',
      border: '3px solid orange',
      margin: '15px auto',
      height: '300px',
      width: '400px'
    };
    const styleHead = {
      border: '1px solid gray',
      margin: '5px auto',
      height: '80px',
      width: '400px',
      display: 'flex',
    };
    const styleImgIcon = {
      maxWidth: "40px",
      height: "auto",
      position: "absolute"
    };
    const styleHeadText = {
      maxWidth: "300px",
      height: "auto",
      padding: "0 0 0 50px"
    };
    const styleImgPost = {
      display: 'block',
      height: '70%',
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'center',
      objectFit: 'contain'
    }
    return (
      <div>
        <Header url={baseUrl} />
        <div>
          {posts.map((post, index) => (

            <div style={stylePost} key={index}>
              <div style={styleHead}>
                <div>
                  <img src={post.PostAuthor.photo} alt={post.id} style={styleImgIcon} />
                </div>
                <div style={styleHeadText}>
                  {`${post.PostAuthor.name}  ${post.PostAuthor.nickname}  ${post.date}`}
                  <p style={{ fontSize: '13px' }}>
                    {post.content}
                  </p>
                </div>
              </div>
              <div style={{...styleImgPost, backgroundImage: `url(${post.image})`}} />
            </div>

          ))}
        </div>
      </div>
    )
  }
}
