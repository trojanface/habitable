import React, {useEffect, useContext, useState} from 'react'
import './style.css'
import HabitElement from '../HabitElement/HabitElement'
import { ContentContext } from '../../App';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function YourHabits() {


    const [saveData, setSaveData] = useState({})
    const {getDB} = useContext(ContentContext);

    useEffect(() => {
      const fetchSavedData = async () => {
        setSaveData(await getDB());
      };
      fetchSavedData();
  
    }, []);
    let habitContainer = [];
    if(typeof saveData[0] !== "undefined") {
      for (let index = 0; index < saveData.length; index++) {
        var objPlusKey =  {key: saveData[index][0], ...saveData[index][1]}
        habitContainer.push(
          <Col xs={6} >
            <div className='habit'>
        <HabitElement key={index} cStreak={saveData[index][1].habitTracking.currentStreak} lStreak={saveData[index][1].habitTracking.longestStreak} today={saveData[index][1].habitTracking.lastDone} name={saveData[index][1].habitName} object={objPlusKey}/>
        </div>
        </Col>
        )
      }
    }

    return (
        <div className='mainCard'>
            <h3 className='titleYourHabits'>Your Habits</h3>
            <Container>
              <Row>
              {habitContainer}
              </Row>
            </Container>
            
        </div>
    )
}

