import React from "react";

import captcha from'./images/captcha.png';
import {useEffect, useState} from 'react';
import CarR from './images/redcar.png'
import {isCursorAtStart} from "@testing-library/user-event/dist/utils";
export default function Car() {

    const { useRef } = React
    const car1 = useRef(null)
    const dragProps = useRef()

    const car2 = useRef(null)
    const car3 = useRef(null)
    //car2
    const [carsX, setCarsX] = useState([car1,car2])
    const initialiseDragX = event => {

        //const { left, top } = car1.current.getBoundingClientRect()
        carsX.forEach((element) =>{
            const { target, clientX, clientY } = event
            const { offsetTop, offsetLeft } = target
            const  { left, top } = element.current.getBoundingClientRect()
            dragProps.current = {
                dragStartLeft: left,
                dragStartTop: top,
                dragStartX: clientX,
                dragStartY: clientY
            }
            window.addEventListener('mousemove', startDraggingX, false)
            window.addEventListener('mouseup', stopDraggingX, false)
        })



    }


    const startDraggingX = ({ clientX, clientY }) => {
        car1.current.style.transform = `translate(${dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX}px`
        // ${dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY}px)
    }

    const stopDraggingX = () => {
        window.removeEventListener('mousemove', startDraggingX, false)
        window.removeEventListener('mouseup', stopDraggingX, false)
    }

    //===============================

    const initialiseDragY = event => {
        const { target, clientX, clientY } = event
        const { offsetTop, offsetLeft } = target
        const { left, top } = car3.current.getBoundingClientRect()

        dragProps.current = {
            dragStartLeft: left,
            dragStartTop: top,
            dragStartX: clientX,
            dragStartY: clientY
        }
        window.addEventListener('mousemove', startDraggingY, false)
        window.addEventListener('mouseup', stopDraggingY, false)
    }


    const startDraggingY = ({ clientX, clientY }) => {
        car3.current.style.transform = `translate(0px ,${dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY}px)`
        //
    }

    const stopDraggingY = () => {
        window.removeEventListener('mousemove', startDraggingY, false)
        window.removeEventListener('mouseup', stopDraggingY, false)
    }

    return (
        <div>
            <button
                onMouseDown={initialiseDragX}
                ref={car1}
            >
            <img src={CarR}
                 draggable="false"
                 alt={"car Red"}/>
            </button>

            <button
                onMouseDown={initialiseDragX}
                ref={car2}
            >
                <img src={CarR}
                     draggable="false"
                     alt={"car Red"}/>
            </button>

            <button
                onMouseDown={initialiseDragY}
                ref={car3}
            >
                <img src={CarR}
                     draggable="false"
                     alt={"car Red"}/>
            </button>
        </div>

    );
}
