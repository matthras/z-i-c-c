import fetch from 'isomorphic-unfetch';

const Index = props => (
  <div>
    <h1>Derp, here's the data</h1>
    <ul>
      {props.data.tickets.map(ticket => (
        <li key={ticket.id}>
          {ticket.subject}
        </li>
      ))}
    </ul>
  </div>
)
Index.getInitialProps = async function() {
  const authToken = Buffer.from(process.env.EMAIL+':'+process.env.PASSWORD).toString('base64'); // Node version of btoa()
  const res = await fetch('https://matthras.zendesk.com/api/v2/tickets.json', {
      "method": "GET",
      headers: {
        "Authorization": `Basic ${authToken}`
      }
    });
  const data = await res.json();
  return {
    data: data
  }
}

export default Index; 