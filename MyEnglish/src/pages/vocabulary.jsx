
import { useState, useEffect } from 'react';
import WordForm from '../components/wordForm';
import WordList from '../components/wordList';
import Flashcards from '../components/flashCard';
import Header from '../components/header'
import Footer from '../components/footer'
import './vocabulary.css';


function App() {
  const [words, setWords] = useState(() => {
    const saved = localStorage.getItem("words");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  const addWord = (word) => {
    setWords([...words, word]);
  };

  const deleteWord = (index) => {
    const updatedWords = [...words];
    updatedWords.splice(index, 1);
    setWords(updatedWords);
  };
  

  return (
    <>
      <Header/>


    <div className='blocoVocabulary' style={{ padding: 20 }}>
      <WordForm onAdd={addWord} />
      <hr />
      <WordList words={words} onDelete={deleteWord} />
      <hr />
      <Flashcards words={words} />
    </div>

    <Footer/>
    </>
  );
}

export default App;
