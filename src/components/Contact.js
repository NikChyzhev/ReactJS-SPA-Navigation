import React, { Component } from 'react';
import { contactsList } from '../contacts';
import Header from './Header';

export default class Contact extends Component {
  render() {
    const baseUrl = this.props.location.pathname;
    const index = this.props.match.params.id;
    const contact = contactsList.find((contact)=> contact.lastName === index);    
    return (
      <div>
        <Header url={baseUrl}/>
        <div key={contact.lastName} className='contact'>
            <strong>{`${contact.firstName} ${contact.lastName}`}</strong>
            <p>Phone: {contact.phone}</p>
          </div>
      </div>
    )
  }
}
