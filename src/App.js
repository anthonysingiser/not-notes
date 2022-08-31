import NotesList from './components/Noteslist'
import {useState} from 'react';
import {nanoid} from 'nanoid';
import Search from './components/Search'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'text of the first note',
      date: '08/23/2022',
    },
    {
      id: nanoid(),
      text: 'text of the second note',
      date: '08/23/2022',
    },
    {
      id: nanoid(),
      text: 'text of the third note',
      date: '08/23/2022',
    },
    {
      id: nanoid(),
      text: 'text of the fourth note',
      date: '08/23/2022',
    },
    {
      id: nanoid(),
      text: 'text of the fifth note',
      date: '08/23/2022',
    },
]);

  const [searchText, setSearchText] = useState('')

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes)
  }

  return( 
    <div className='container'>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
        notes = {notes} 
        handleAddNote = {addNote}
        handleDeleteNote = {deleteNote} 
      />
    </div>
  )
}
export default App;