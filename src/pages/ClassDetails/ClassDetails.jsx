import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from "../../services/api-calls";


const ClassDetails = (props) => {
  const [classDetails, setClassDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.classTitle.url)
    .then(classDetails => setClassDetails(classDetails))
  },[])
  
  return (
    <>
      <div>
        {classDetails.name ?
        <>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <h2>{classDetails.name}</h2>
          <div>Hit die: d{classDetails.hit_die}</div>
          <h3>Proficiencies:</h3>
          {classDetails.proficiencies.map((proficiency) => (
            <div key={proficiency.index}>{proficiency.name}</div>
          ))}
        </>
        :
        <>
          <p>Loading class details...</p>
        </>
        }
      </div>
    </>
  );
}
 
export default ClassDetails;