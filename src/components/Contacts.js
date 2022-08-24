import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactsList } from '../contacts';
import Header from './Header';

export default class Contacts extends Component {
  render() {
    const baseUrl = this.props.location.pathname;
    return (
      <div>
        <Header url={baseUrl} />        
        {contactsList.map((contact) => (
          <Link key={contact.lastName} to={`/contacts/${contact.lastName}`}>
          <div key={contact.lastName} className='contact'>
            <strong>{`${contact.firstName} ${contact.lastName}`}</strong>
            <p>Phone: {contact.phone}</p>
          </div>
          </Link>
        ) )}
      </div>
    )
  }
}
