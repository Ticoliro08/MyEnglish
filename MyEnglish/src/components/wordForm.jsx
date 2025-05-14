import { useState } from 'react';
import './wordForm.css'
export default function WordForm({ onAdd }) {
  const [english, setEnglish] = useState('');
  const [translation, setTranslation] = useState('');
  const [example, setExample] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!english || !translation) return;
    onAdd({ english, translation, example });
    setEnglish('');
    setTranslation('');
    setExample('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Nova Palavra</h2>
      <input className='inputWord' placeholder="Inglês" value={english} onChange={e => setEnglish(e.target.value)} />
      <input className='inputWord' placeholder="Tradução" value={translation} onChange={e => setTranslation(e.target.value)} />
      <input className='inputWord' placeholder="Exemplo (opcional)" value={example} onChange={e => setExample(e.target.value)} />
      <button  className='btnWord' type="submit">Adicionar</button>
    </form>
  );
}
