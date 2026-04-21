import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import Card from '../component/Card'

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    async function getCreators() {
      const { data } = await supabase
        .from('creators')
        .select()
      
      if (data) {
        setCreators(data)
      }
    }
    getCreators()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>💫 Creatorverse</h1>
      <Link to="/add">
        <button>+ Add Creator</button>
      </Link>
      <br/><br/>
      {creators.length === 0 ? (
        <p>No creators yet! Add some above.</p>
      ) : (
        <div>
          {creators.map((creator) => (
<Card key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ShowCreators
