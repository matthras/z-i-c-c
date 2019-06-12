import fetch from 'isomorphic-unfetch';
import React from 'react';
import Error from 'next/error';

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
      return <Error statusCode={this.props.errorCode} />
    }

    return(
      <div>
        <h1>Derp, here's the data</h1>
        <ul>
          {this.props.data.tickets.map(ticket => (
            <li key={ticket.id}>
            {ticket.subject}
            </li>
          ))}
        </ul>
      </div>
    ) 
  }
}

export default Index; 