import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowCreators from './page/ShowCreators'
import ViewCreator from './page/ViewCreator'
import AddCreator from './page/AddCreator'
import EditCreator from './page/EditCreator'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
