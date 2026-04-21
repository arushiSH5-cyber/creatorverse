import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

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

  function handleChange(e) {
    setCreator({ ...creator, [e.target.name]: e.target.value })
  }

  async function handleUpdate() {
    await supabase
      .from('creators')
      .update(creator)
      .eq('id', id)
    navigate('/')
  }

  async function handleDelete() {
    await supabase
      .from('creators')
      .delete()
      .eq('id', id)
    navigate('/')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Edit Creator</h1>
      <input name="name" value={creator.name} onChange={handleChange} /><br/><br/>
      <input name="url" value={creator.url} onChange={handleChange} /><br/><br/>
      <input name="description" value={creator.description} onChange={handleChange} /><br/><br/>
      <input name="imageURL" value={creator.imageURL || ''} onChange={handleChange} /><br/><br/>
      <button onClick={handleUpdate}>Save Changes</button>
      &nbsp;&nbsp;
      <button onClick={handleDelete} style={{ color: 'red' }}>Delete Creator</button>
      <br/><br/>
    </div>
  )
}

export default EditCreator