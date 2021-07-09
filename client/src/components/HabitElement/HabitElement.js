import React,  { useState, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ContentContext } from '../../App';
import './style.css';
var { DateTime } = require('luxon');

export default function HabitElement(props) {
    const [todayCompleted, setTodayCompleted] = useState(false)
    const {setNewContext, setDB} = useContext(ContentContext);

    if (props.today == DateTime.now().c.day && todayCompleted === false) {
        setTodayCompleted(true)
    }

    let saveHabit = async function () {
        // console.log(props.object)
        let longSt = 0;
        let currSt = 0;
        if (props.object.lastDone == DateTime.now().plus({ days: -1 }).day) {
            currSt += 1;
        } else {
            currSt = 0;
        }
        if (props.object.habitTracking.longestStreak < props.object.habitTracking.currentStreak + 1) {
longSt = props.object.habitTracking.currentStreak + 1;
        } else {
            longSt=props.object.habitTracking.longestStreak
        }
        let saveVar = {
            habitTracking: {longestStreak: longSt,
             currentStreak: props.object.habitTracking.currentStreak, 
             lastDone: DateTime.now().c.day}, key: props.object.key, 
             habitName: props.object.habitName, habitConditions: props.object.habitConditions,
             habitEffects: props.object.habitEffects, habitAuth: props.object.habitAuth, 
             habitNo: props.object.habitNo}
        console.log(saveVar)    
        await setDB(saveVar, saveVar);
        setTodayCompleted(true)
    }

    return (
        <div onClick={()=>{saveHabit()}} className='habitWrapper'>
            {todayCompleted != true  ?
            <div className='habitContent habitContentIncomplete' >
            <h5>{props.name}</h5>
            <p>Current Streak: {props.cStreak}</p>
            <p>Longest Streak: {props.lStreak}</p>
            </div>
        :
        <div className='habitContent habitContentComplete' >
            <h5>{props.name}</h5>
            <p>Current Streak: {props.cStreak}</p>
            <p>Longest Streak: {props.lStreak}</p>
            </div>
        }
        <div>
        <Button  onClick={()=>{setNewContext(1, props.object)}} variant="outline-info" size="sm">Edit</Button>
        </div>
            
        </div>
    )
}
