import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function AddCreator() {
  const navigate = useNavigate()
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  })

  function handleChange(e) {
    setCreator({ ...creator, [e.target.name]: e.target.value })
  }

  async function handleSubmit() {
    await supabase.from('creators').insert([creator])
    navigate('/')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add a Creator</h1>
      <input name="name" placeholder="Name" onChange={handleChange} /><br/><br/>
      <input name="url" placeholder="Channel URL" onChange={handleChange} /><br/><br/>
      <input name="description" placeholder="Description" onChange={handleChange} /><br/><br/>
      <input name="imageURL" placeholder="Image URL (optional)" onChange={handleChange} /><br/><br/>
      <button onClick={handleSubmit}>Add Creator</button>
    </div>
  )
}

export default AddCreator