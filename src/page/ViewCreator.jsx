import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    async function getCreator() {
      const { data } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
      
      if (data) setCreator(data[0])
    }
    getCreator()
  }, [id])

  if (!creator) return <p>Loading...</p>

  return (
    <div style={{ padding: '20px' }}>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} style={{ width: '300px' }} />
      )}
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank">Visit Channel</a>
      <br/><br/>
      <Link to={`/edit/${creator.id}`}>
        <button>Edit Creator</button>
      </Link>
      <br/><br/>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}

export default ViewCreator