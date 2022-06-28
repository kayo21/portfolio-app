import './TrelloClone.css';
import Header from './components/header';
import Trello from './components/columns';
import data from './components/data';
import Task2 from './components/task2';
import CardInterface from './components/modal';
import React, { useState, createContext } from 'react';
import dataTrello from './components/dataTrello';
import Navbar from '../../components/navbar/navbar';

export const ModalContext = createContext()

function TrelloClone() {
  let [modalCardObject, setModalCardObject] = useState({name:"smth"})

  return (
    <ModalContext.Provider value={setModalCardObject}>
      <div id="mainScreen">
        {/* <Header /> */}
        <div className="flex">
          <Trello dataTrello={dataTrello} />
        </div>
      </div>
      <CardInterface modalCardObject={modalCardObject} />

      
    </ModalContext.Provider>
  );
}

export default TrelloClone;