import React, { Component } from 'react';
import { photos } from '../photos';
import Header from './Header'

export default class PhotosInsta extends Component {
  render() {
    const baseUrl = this.props.location.pathname;
    return (
      <div>
        <Header url={baseUrl} />
        {
          photos.map((photo)=>(
            <div className='photo' key={photo.id}>
              <img src={photo.image} alt={photo.id}/>
            </div>
          ))
        }
      </div>
    )
  }
}
