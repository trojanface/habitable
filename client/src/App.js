import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import YourHabits from './components/YourHabits/YourHabits';
import NewHabit from './components/NewHabit/NewHabit';
import { del, get, set, entries } from 'idb-keyval';
import Login from './pages/Login/Login';

export const ContentContext = React.createContext();

function App() {


  

  const [page, setPage] = useState(2);
  const [editObj, setEditObj] = useState({});

  var content = <YourHabits />;
  if (page === 0) {
      content = <YourHabits />;
  } else if (page === 1){
    content = <NewHabit editObj={editObj}/>;
  } else if (page === 2){
    content = <Login />
  } 

  let setNewContext = (value, object) => {
    console.log(object)
    setEditObj(object)
    setPage(value)

      
    
  }
  
  return (
    <ContentContext.Provider value={{setNewContext, setDB, getDB, delDB}}>
    <div className="App">
      {page === 2 ?
      content
      :
      <>
        <MenuBar />
        {content}
        <Footer props={page}/>
      </>
    }
    </div>
    </ContentContext.Provider>
  );
}

async function getDB() {
  return await entries();
    //  return await get(`habit${1}`)
}

async function setDB(data, editObj) {
   let database = await getDB();
  if(typeof database[0] !== "undefined") {
    if (typeof editObj == 'undefined') {
      data = {key: `habit${database.length+1}`, ...data}
      await set(`habit${database.length+1}`, data);
    } else {
      await set(editObj.key, data);
    }
  } else {
    data = {key: `habit0`, ...data}
    await set(`habit0`, data);
  }
}

async function delDB(key) {
  del(key);
}

export default App;
