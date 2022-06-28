import React, { useContext } from "react"
import { ModalContext } from '../TrelloClone'

export default function Card({crntCardObject}){
  const setModalCardObject = useContext(ModalContext)
  function showModal(){
    setModalCardObject(crntCardObject)
    let modal = document.getElementById('modalScreen')
    let main = document.getElementById('mainScreen')
    modal.classList.remove('hidden')
    main.classList.add('blur-in')
  }  
  
  return(
      <div className="flex">
        <div onClick={showModal} className="option-bg" id={crntCardObject.id} draggable="true" onDragStart={drag}>    
          {crntCardObject.name}
        </div>
      </div>
    )
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }