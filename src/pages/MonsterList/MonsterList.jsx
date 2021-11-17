import React, { useEffect, useState } from 'react'
import { getMonsterList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const MonsterList = (props) => {
  const [monsterList, setMonsterList] = useState([])

  useEffect(()=> {
    getMonsterList()
    .then(monsterList => setMonsterList(monsterList.results))
  },[])

  return (
    <>
      <h3>Monster List (OMG SCARY)</h3>
      {monsterList.length ? 
      <>
        {monsterList.map((monster) => (
          <div key={monster.index}>
            <Link
              to="/monster"
              state={{ monster }}
            >
              {monster.name}
            </Link><br/>
          </div>
        ))}
      </>
      :
      <>
        <h2>Loading scary monsters...</h2>
      </>}
    </>
  );
}
 
export default MonsterList;