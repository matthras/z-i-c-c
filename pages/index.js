import fetch from 'isomorphic-unfetch';
import React from 'react';
import Error from 'next/error';
import Ticket from './components/Ticket';

class Index extends React.Component {
  static async getInitialProps() {
    const authToken = Buffer.from(process.env.EMAIL+':'+process.env.PASSWORD).toString('base64'); // Node version of btoa()
    const res = await fetch('https://matthras.zendesk.com/api/v2/tickets.json', {
      "method": "GET",
      headers: {
        "Authorization": `Basic ${authToken}`
      }
    });
    const errorCode = res.statusCode > 200 ? res.statusCode : false;
    const data = await res.json();
    return {
      errorCode,
      data: data
    }
  }
  render() {
    if(this.props.errorCode) {
      return <Error statusCode={this.props.errorCode} /> // Default Error component that comes with Next.js
    }

    return(
      <div>
        <h1>ZenDesk Ticket Data</h1>
        {this.props.data.tickets.map(ticket => (
          <Ticket
            id={ticket.id}
            status={ticket.status}
            priority={ticket.priority}
            subject={ticket.subject}
            description={ticket.description}
            created_at={ticket.created_at}
            recipient={ticket.recipient}
            url={ticket.url} 
          />
        ))}
      </div>
    ) 
  }
}

export default Index; 