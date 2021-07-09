import React, { useState } from 'react'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

export  function TimeCondition(props) {
    const [timeRangeTog, settimeRangeTog] = useState(false)
    let weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let weekdayContainer = [];
    let updateObj = (element)=> {
        let tempObj = props.condObj;
        tempObj.[element] = !props.condObj.[element];
        props.updateObj(props.index,props.type,tempObj);
    }
    for (let index = 0; index < weekdays.length; index++) {
        {props.condObj['on' + weekdays[index]] ?
            weekdayContainer.push(
                <Button variant="light" key={index} onClick={()=>{updateObj('on' + weekdays[index])}}>{weekdays[index]}: Yes</Button>)
      :
      weekdayContainer.push(
        <Button variant="light" key={index} onClick={()=>{updateObj('on' + weekdays[index])}}>{weekdays[index]}: No</Button>)
      }
    }
    

    return (
        <div>
            
        <span>Run task  {timeRangeTog ?
        
            <span><Button variant="light" onClick={()=>{settimeRangeTog(false)}}>At</Button> <input type='time'></input></span> :
            <span><Button variant="light" onClick={()=>{settimeRangeTog(true)}}>Between</Button> <input type='time'></input> and <input type='time'></input></span>
        } on 
        <div>
            {weekdayContainer}
            
            
        </div>
        <Button variant="outline-danger" onClick={()=>{props.deleteFunc(props.index,props.type)}}>X</Button>
</span>
            
        </div>
    )
}

export function GeolocationCondition(props) {
    return (
        <div>
            <Button variant="light">Use current position</Button>
            <span>Longitude: <input type='number'></input> Latitude: <input type='number'></input> Radius(M): <input type='number' defaultValue={10}></input></span>
            <Button variant="outline-danger" onClick={()=>{props.deleteFunc(props.index,props.type)}}>X</Button>
        </div>
    )
}

export function AndOr(props) {
    return (
        <div>
            <Button variant="outline-info" onClick={()=>{props.triggerValue(props.index,props.value,props.arrayType)}}>{props.value}</Button>{' '}
            
        </div>
    )
}

export function PushNotification(props) {
    return (
        <div>
            <input type='text' placeholder='Your notification text'></input>
            <Button variant="outline-danger" onClick={()=>{props.deleteFunc(props.index,props.type)}}>X</Button>
        </div>
    )
}

export function AuthPush(props) {
    return (
        <div>
            Push Notification (Will send a notification for you to acknowledge on your homescreen)
            </div>
    )
}

export function AuthCheck(props) {
    return (
        <div>
            Check Off Day (You must open Habitable and mark the day as completed beneath your habit)
        </div>
    )
}

export function AuthNone(props) {
    return (
        <div>
            None. (We don't know if you do your habits or not, and we don't care. We're not your mother.)
        </div>
    )
}