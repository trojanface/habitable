import React, {useState, useContext} from 'react'
import './style.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { AuthCheck, AuthNone, AuthPush, TimeCondition } from '../NewHabitElement/NewHabitElement'
import { GeolocationCondition } from '../NewHabitElement/NewHabitElement'
import { AndOr } from '../NewHabitElement/NewHabitElement'
import { PushNotification } from '../NewHabitElement/NewHabitElement'
import { ContentContext } from '../../App';
import Button from 'react-bootstrap/Button'

export default function NewHabit(props) {

    const [conditions, setConditions] = useState([])
    const [effects, setEffects] = useState([])
    const [authentication, setAuthentication] = useState([]);
    const [habitTracking, setHabitTracking] = useState({});
    const [habitName, sethabitName] = useState('')
    const {setDB, delDB, setNewContext} = useContext(ContentContext);
    var conditionContainer = [];
    var effectsContainer = [];
    var authenticationContainer = [];
    var { DateTime } = require('luxon');
    if (typeof props.editObj != 'undefined' && habitName === '') {
        setConditions(props.editObj.habitConditions);
        setEffects(props.editObj.habitEffects);
        setAuthentication(props.editObj.habitAuth);
        setHabitTracking(props.editObj.habitTracking);
        sethabitName(props.editObj.habitName);
    }

    let handleInput = (event) => {
        sethabitName({ name: event.target.value });  
    };

    let saveHabit = async function () {
        let saveVar = {habitTracking: {longestStreak: 0, currentStreak:0, lastDone: DateTime.now().c.day}, habitName: habitName, habitConditions: conditions, habitEffects: effects, habitAuth: authentication, habitNo: 1}
        if (typeof props.editObj != 'undefined') {
            saveVar = {key: props.editObj.key, ...saveVar};
            await setDB(saveVar, props.editObj);
            setNewContext(0);
        } else {
            await setDB(saveVar);
            setNewContext(0);
        }

    }

    let deleteHabit = async function () {

        await delDB(props.editObj.key)
        setNewContext(0);
    }

    let UpdateAndOr = function(index, value, arrayType) {
        let tempArray = [];
        if (arrayType === 'condition') {
            tempArray = [...conditions];
        }
        if (arrayType === 'effect') {
            tempArray = [...effects];
        }
       
        if (value === 'And') {
            tempArray.splice(index,1,{type:'AndOr',value:'Or'})
        } else if (value === 'Or') {
            tempArray.splice(index,1,{type:'AndOr',value:'And'})
        }
        if (arrayType === 'condition') {
            setConditions(tempArray);
        }
        if (arrayType === 'effect') {
            setEffects(tempArray);
        }
        
    }

    let DeleteArrayItem = function (index, type) {
        let tempArray = [];
        if (type === 'time' || type ===  'geo') {
        tempArray = [...conditions];
        }
        if (type === 'push') {
             tempArray = [...effects];
            }
        if (index === tempArray.length-1) {
            tempArray.splice(index-1,2)
        } else {
            tempArray.splice(index,2)
        }
        if (type === 'time' || type ===  'geo') {
            setConditions(tempArray);
            }
            if (type === 'push') {
                setEffects(tempArray);
                }
     
    }

    let UpdateArrayItem = function (index, type, obj) {
        let tempArray = [];
        if (type === 'time' || type ===  'geo') {
            tempArray = [...conditions];
            }
            if (type === 'push') {
                 tempArray = [...effects];
            }
                tempArray.splice(index,1,obj)
            if (type === 'time' || type ===  'geo') {
                setConditions(tempArray);
                }
                if (type === 'push') {
                    setEffects(tempArray);
                    }
    }

    for (let index = 0; index < conditions.length; index++) {
        if (conditions[index].type === 'time') {
        conditionContainer.push(
        <TimeCondition key={index} updateObj={UpdateArrayItem} condObj={conditions[index]} type={conditions[index].type} index={index} deleteFunc={DeleteArrayItem} />
        );
        } else if (conditions[index].type === 'geo') {
            conditionContainer.push(
            <GeolocationCondition key={index} type={conditions[index].type} deleteFunc={DeleteArrayItem}/>
            );
            } else if (conditions[index].type === 'AndOr') {
                conditionContainer.push(
                <AndOr index={index} arrayType='condition' type={conditions[index].type} value={conditions[index].value} triggerValue={UpdateAndOr} key={index} />
                );
                } 
    };

    for (let index = 0; index < effects.length; index++) {
        if (effects[index].type === 'push') {
            effectsContainer.push(
        <PushNotification key={index} type={effects[index].type} index={index} deleteFunc={DeleteArrayItem} />
        );
        } else if (effects[index].type === 'AndOr') {
            effectsContainer.push(
            <AndOr index={index} arrayType='effect' type={effects[index].type} value={effects[index].value} triggerValue={UpdateAndOr} key={index} />
            );
            }  
    };
 
    if (authentication === 'authnone') {
        authenticationContainer.push(
    <AuthNone key={1} />
    );
        }
        if (authentication === 'authpush') {
            authenticationContainer.push(
        <AuthPush key={1} habitName={habitName} />
        );
            }
            if (authentication === 'authcheck') {
                authenticationContainer.push(
            <AuthCheck key={1} />
            );
                }

    let NewEffect = function (type) {
        if (type === 'push') {
            if (effects.length > 0) {
                setEffects([...effects,{type:'AndOr',value:'And'},{type: 'push', text: ''}]);    
            } else {
                setEffects([...effects,{type: 'push', text: ''}]);    
            }
        } 
    }
    
    let NewCondition = function (type) {
        if (type === 'time') {
            if (conditions.length > 0) {
                setConditions([...conditions,{type:'AndOr',value:'And'},{type: 'time', timeHour: 0, timeMinute: 0, onSunday: false,onMonday: false,onTuesday: false,onWednesday: false,onThursday: false,onFriday: false,onSaturday: false}]);    
            } else {
                setConditions([...conditions,{type: 'time', timeHour: 0, timeMinute: 0, onSunday: false,onMonday: false,onTuesday: false,onWednesday: false,onThursday: false,onFriday: false,onSaturday: false}]);    
            }
        } else if (type === 'geo') {
            if (conditions.length > 0) {
                setConditions([...conditions,{type:'AndOr',value:'And'},{type: 'geo', lat: 0, lon: 0, radius:0}]);
            } else {
                setConditions([...conditions,{type: 'geo', lat: 0, lon: 0, radius:0}]);
             }
          
        }       
    }
    return (
        <div className='mainCard'>
            {typeof 
            props.editObj == 'undefined' ?
            <>
            <h4 className='titleYourHabits'>Create a new habit</h4> 
            <input onChange={e => sethabitName(e.target.value)} placeholder='Habit Name'></input>
            </>
            :
            <>
            <h4 className='titleYourHabits'>Edit habit</h4>
            <input onChange={e => sethabitName(e.target.value)} value={habitName}></input>
            </>
    }
            
            <h5 className='subtitle'>Conditions</h5>
            {conditionContainer}
            <DropdownButton id="dropdown-basic-button" title="Add">
             <Dropdown.Item onClick={()=>{NewCondition('time')}}>Time</Dropdown.Item>
             <Dropdown.Item onClick={()=>{NewCondition('geo')}}>Geolocation</Dropdown.Item>
            </DropdownButton>
            <h5 className='subtitle'>Effects</h5>
            {effectsContainer}
            <DropdownButton id="dropdown-basic-button" title="Add">
             <Dropdown.Item onClick={()=>{NewEffect('push')}}>Push Notification</Dropdown.Item>
            </DropdownButton>
            <h5 className='subtitle'>Authentication</h5>
            {authenticationContainer}
            <DropdownButton id="dropdown-basic-button" title="Edit">
             <Dropdown.Item onClick={()=>{setAuthentication('authpush')}}>Acknowledge Push Notification</Dropdown.Item>
             <Dropdown.Item onClick={()=>{setAuthentication('authcheck')}}>Check off day</Dropdown.Item>
             <Dropdown.Item onClick={()=>{setAuthentication('authnone')}}>None</Dropdown.Item>
            </DropdownButton>
            <br></br>
            {typeof 
            props.editObj == 'undefined' ?
            <Button onClick={()=>{saveHabit()}} variant="success">Save new habit</Button>
            :
            <>
            <Button onClick={()=>{saveHabit()}} variant="success">Save updates</Button>
            <h5>Or</h5>
            <Button onClick={()=>{deleteHabit()}} variant="warning">Delete Habit</Button>
            </>
}

            

        </div>
    )
}
