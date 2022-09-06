import NotesList from './components/Noteslist'
import {useState} from 'react';
import {nanoid} from 'nanoid';
import Search from './components/Search'
import Header from './components/Header';
//use API for state
//make a back-end for the object
//function that presents a random note, "Better Things" to do than [blank]
function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Notes App...',
      date: new Date().toLocaleDateString()
    },
  ])

  const [searchText, setSearchText] = useState('')  
  const [darkMode, setDarkMode] = useState(false)

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
    <div className={`${darkMode && 'dark-mode'}`}>  
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes = {notes.filter((note)=> 
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )} 
          handleAddNote = {addNote}
          handleDeleteNote = {deleteNote} 
        />
      </div>
    </div>
  )
}
export default App;