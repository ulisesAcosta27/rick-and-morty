import React, { useState, useEffect } from 'react';
import './style/RickAndMorty.css'

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]); //itera el array de objetos
  const [character, setCharacter] = useState('default'); // obtiene el valor (por id) del personaje
  const [characterSelected , SetCharacterSelected] = useState('') //devuelve el valor de un personaje
  const [iteracion, setIteracion] = useState([])
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
    const res = await api.json();
    if(characterSelected !== ''){
      console.log({ name: res.name, status: res.status, species: res.species, image: res.image });
      return setIteracion([ {name: res.name, status: res.status, species: res.species, image: res.image} ]);
    }
  }

  return (
    <div className='cardContainer'>
          <h2>Rick and Morty App</h2>
          <select value={ character } onChange={ (e) => setCharacter(e.target.value) }>
            {
              characters.map((item) => {
                return(
                  <option  value={ item.id } key={item.id} >{ item.name }</option>)
              })
            }
          </select>
          <div>
            {
              iteracion.map(item => {
                return(
                  <div key={ item } className='targetContainer'>
                    <img src={item.image} alt={item.name } />
                    <div className="targetText">
                      <h3>{item.name}</h3>
                      <p>species: <b>{item.species}</b></p>
                      <p>status: <b>{item.status}</b></p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
  )
};

export default RickAndMorty;
