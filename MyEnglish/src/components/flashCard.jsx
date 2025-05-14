import { useState } from 'react';
import './flashCard.css'
export default function Flashcards({ words }) {
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const nextCard = () => {
    setIndex((index + 1) % words.length);
    setShowTranslation(false);
  };

  if (words.length === 0) return <p>Add word to study</p>;

  const word = words[index];

  return (
    <div>
      <h2>Modo Estudo</h2>
      <div className="flashcard-container">
      <p style={{ fontSize: 24 }}>{word.english}</p>
        {showTranslation && (
          <>
            <p><strong>Translation:</strong> {word.translation}</p>
            {word.example && <p><em>Example: {word.example}</em></p>}
          </>
        )}
        <button className='btnWord' onClick={() => setShowTranslation(!showTranslation)}>
          {showTranslation ? "Hidden" : "Translation"}
        </button>
        <button className='btnWord' onClick={nextCard} style={{ marginLeft: 10 }}>Next</button>
      </div>
    </div>
  );
}
