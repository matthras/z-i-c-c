import fetch from 'isomorphic-unfetch';

const Index = props => (
  <div>
    <h1>Derp, here's the data</h1>
    {data}
  </div>
)
Index.getInitialProps = async function() {
  const res = await fetch('https://matthras.zendesk.com/api/v2/tickets.json', {
      "method": "GET",
      headers: {
        "Authorization": "Basic bWF0dGhldy55LnAubWFja0BnbWFpbC5jb206eldjYWV4cWRa"
      }
    });
  console.log(typeof res);
  console.log(res);
  const data = await res.json();
  console.log(data);
  return {
    data: data
  }
}

export default Index; 