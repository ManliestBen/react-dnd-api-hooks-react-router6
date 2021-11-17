import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSpellDetails } from '../../services/api-calls';

const SpellDetails = (props) => {
  const [spellDetails, setSpellDetails] = useState({})
  const { name } = useParams()
  useEffect(()=> {
    getSpellDetails(name)
    .then(spellDetails => setSpellDetails(spellDetails))
  },[])

  return (
    <>
      <h3>Spell Details</h3>
      { spellDetails.name ? 
        <>
          <h1>{spellDetails.name}</h1>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <p>{spellDetails.desc[0]}</p>
          <h2>Spell Player Classes</h2>
          {spellDetails.classes.length ?
          <>
            {spellDetails.classes.map(playerClass =>
              <div key={playerClass.index}>
                <p>{playerClass.name}</p>
              </div>
            )}
          </>
          :
          <p>No player classes may use this spell</p>
          }
        </>
        :
        <>
          <p>Loading spell details...</p>
        </>
      }
    </>
  );
}
 
export default SpellDetails;