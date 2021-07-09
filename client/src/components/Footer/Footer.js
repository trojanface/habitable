import React, { useContext } from 'react';
import './style.css';
import { ContentContext } from '../../App';
var { DateTime } = require('luxon');
var monthNames = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

function Footer({props}) {
    const month = monthNames[DateTime.now().c.month];
    const {setNewContext} = useContext(ContentContext);
    let buttonType = <button className="addHabitButton" onClick={()=>{setNewContext(1)}}>+</button>;
    if (props === 1) {
        buttonType = <button className="closeHabitButton" onClick={()=>{setNewContext(0)}}>X</button>;
    } else if (props === 0) {
        buttonType = <button className="addHabitButton" onClick={()=>{setNewContext(1)}}>+</button>;
    } else if (props === 2) {
        buttonType = <button className="addHabitButton" onClick={()=>{setNewContext(1)}}>X</button>;
    }
    return (
            <footer className="footer">
                <div className="addHabit">
                    {buttonType}
                </div>

                <div className="timeWrapper">
                <div className="clockColour">
                <h4 className="time">{DateTime.now().c.hour}:{DateTime.now().c.minute}</h4>
                <h6 className="date">{month} {DateTime.now().c.day}</h6>
                </div>
                </div>
            </footer>
    )
}


export default Footer;
