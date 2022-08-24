import NotesList from './components/Noteslist'
import {useState} from 'react';
import {nanoid} from 'nanoid';

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
  return( 
    <div className='container'>
      <NotesList notes = {notes} />
    </div>
  )
}
export default App;