import React, { useState, useRef } from 'react';
import Card from './cards';

function Trello({dataTrello}){
  let [cardId, setCardId] = useState(7)
  return (
    <div className="flex">
      {
        dataTrello.map((crntColumnObject) => {
          return <Column key={crntColumnObject.id} cardId={cardId} setCardId={setCardId} crntColumnObject={crntColumnObject} />
        } )
      }
      <div className="add-column-btn">
        Add column
      </div>
    </div>
  )
}

function Column({crntColumnObject, cardId, setCardId}) {
    let [cardsArrayObject, setCardsArray] = useState({cardsArray: crntColumnObject.cards})
    const cardInput = useRef()

    function addCard(){
      setCardId(cardId + 1)
      setCardsArray((oldCardsArrayObject) => {
        let oldCardsArray = oldCardsArrayObject.cardsArray
        let newName = cardInput.current.value
        cardInput.current.value=""
        oldCardsArray.push(
          {
            name: newName,
            id: 'card' + cardId,
          }
        )
        return {
          cardsArray: oldCardsArray,
        }
      })
    }

    return (
      <div>
        <div className="block columns-bg">
          <b>{crntColumnObject.name}</b>
          <div className="dropPlace" onDrop={drop} onDragOver={allowDrop}>
              {
                cardsArrayObject.cardsArray.map(
                  (crntCardObject) => {
                    return <Card key={'card' + crntCardObject.id} crntCardObject={crntCardObject} />
                  } )
              }
            </div>
            <div className="">
            </div>
            <textarea ref={cardInput} className="columns-textarea" id={'textarea' + crntColumnObject.id} placeholder="Enter Card Name..."></textarea>
            <button onClick={addCard} className="columns-btn">Add Card</button>
        </div>
      </div>
    )
  
  // let columns_array = []
    // for (let i = 0; i < 5; i++){
    //   let column = 
      // <div>
      //   <div className="block">
      //     <div className="columns-bg" onDrop={drop} onDragOver={allowDrop}>
      //       {i + 1}
      //       <div className="dropPlace">
      //       {ColumnOptions(i)}
      //       </div>
      //       <textarea className="columns-textarea"></textarea>
      //       <button className="columns-btn">Button</button>
      //     </div>
      //   </div>
      // </div>
    //   columns_array.push(column)
    // }
  
    // return columns_array
  }
  // function modalShow(e) {
  //   e.preventDefault()
  //   let modal = document.getElementById("modal")
  //   modal.classList.remove("hidden")
  // }
  
// function ColumnOptions(columnIndex) {
//     let options_array = []
//     for (let i = 0; i < 3; i++) {
//       let id = 'card' + (columnIndex*3 + i)
//       let option = 
//       <div className="flex">
//         <div className="option-bg" id={id} onСlick={modalShow} draggable="true" onDragStart={drag}>{columnIndex*3 + i + 1}</div>
//       </div>
//       options_array.push(option)
//     }
  
//     return options_array
//   }


function ModalHide() {
  let modal = document.getElementById("modal")
  modal.classList.add("hidden")
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.closest('.dropPlace').appendChild(document.getElementById(data));
  }

export default Trello;