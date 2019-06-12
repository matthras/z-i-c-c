const Ticket = props => (
  <div id={props.id}>
    <h2>ID: {props.id} | Status: {props.status} | Priority: {props.priority}</h2>
    <h3>Subject: {props.subject}</h3>
    <h4>Description: {props.description}</h4>
    <ul>
      <li>Created: {props.created_at}</li>
      <li>Recipient: {props.recipient}</li>
      <li>URL: {props.url}</li>
    </ul>
  </div>
)

export default Ticket;