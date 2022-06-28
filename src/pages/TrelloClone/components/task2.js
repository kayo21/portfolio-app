import React, { useRef, Fragment } from 'react'

export default function Task2() {
    const inputContent = useRef()
    function showWhatsInside(){
        console.log(inputContent.current.value)
    }

    return(
        <Fragment>
            <input onChange={showWhatsInside} ref={inputContent}></input>
        </Fragment>
    )
}