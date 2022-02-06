import React, { useState, useEffect } from 'react';

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]); //itera el array de objetos
  const [character, setCharacter] = useState(''); // obtiene el valor (por id) del personaje
  const [characterSelected , SetCharacterSelected] = useState('') //devuelve el valor de un personaje
  useEffect(() => {
    apiFetch()
  }, []);

  useEffect(() => {
    showUpCharacter()
  }, [character])

  const apiFetch = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const res = await api.json()
    console.log(res.results);
    return setCharacters(res.results)
  }
  const showUpCharacter = async () => {
    SetCharacterSelected(character)
    const api = await fetch(`https://rickandmortyapi.com/api/character/${characterSelected}`);
    const { res } = await api.json();
    const cardCharacter = res.map( item => {
      return {
        image: item.image,
        status: item.status,
        name: item.name
      }
    })

    console.log(cardCharacter);
  }

  return (
    <div>
        <div className="cardContainer">
          <select value={ character } onChange={ (e) => setCharacter(e.target.value) }>
            {
              characters.map((character) => {
                return(
                  <option  value={ character.id } key={character.id} >{ character.name }</option>)
              })
            }
          </select>
          <div>
            
          </div>
        </div>
    </div>
  )
};

export default RickAndMorty;
