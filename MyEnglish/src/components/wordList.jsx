import { useState } from 'react';
import './wordList.css'
export default function WordList({ words, onDelete }) {
  const [wordToDelete, setWordToDelete] = useState(null);

  const handleDeleteClick = (index) => {
    setWordToDelete(index);
  };

  const confirmDelete = () => {
    if (wordToDelete !== null) {
      onDelete(wordToDelete);
      setWordToDelete(null);
    }
  };

  const cancelDelete = () => {
    setWordToDelete(null);
  };

 
  

  return (
    <div>
      <h2>Word List</h2>
      <ul className="lista">
        {words.map((word, index) => (
          <li className="item" key={index}>
            <strong>{word.english}</strong> - {word.translation}
            {word.example && <div><em>Ex: {word.example}</em></div>}
            <button onClick={() => handleDeleteClick(index)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>

      {wordToDelete !== null && (
        <div className="modal">
          <div className="modal-content">
            <p>Do you have certain to delete <strong>{words[wordToDelete].english}</strong>?</p>
            <button onClick={confirmDelete}>Sim</button>
            <button onClick={cancelDelete}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
