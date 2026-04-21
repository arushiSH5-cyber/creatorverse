import { Link } from 'react-router-dom'

function Card({ creator }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      width: '250px',
      display: 'inline-block',
      verticalAlign: 'top',
      textAlign: 'center'
    }}>
      {creator.imageURL && (
        <img 
          src={creator.imageURL} 
          alt={creator.name}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      )}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank">Visit Channel</a>
      <br/><br/>
      <Link to={`/creator/${creator.id}`}>View Details</Link>
    </div>
  )
}

export default Card