import React from "react";

import captcha from'./images/captcha.png';
import {useEffect, useState} from 'react';

export default function Captcha() {

    const { useRef } = React
    const elemRef = useRef(null)
    const dragProps = useRef()
    
    
    const initialiseDrag = event => {
      const { target, clientX, clientY } = event
      const { offsetTop, offsetLeft } = target
      const { left, top } = elemRef.current.getBoundingClientRect()
      
      dragProps.current = {
        dragStartLeft: left - offsetLeft,
        dragStartTop: top - offsetTop,
        dragStartX: clientX,
        dragStartY: clientY
      }
      window.addEventListener('mousemove', startDragging, false)
      window.addEventListener('mouseup', stopDragging, false)
    }
    
    
    const startDragging = ({ clientX, clientY }) => {    
      elemRef.current.style.transform = `translate(${dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX}px, ${dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY}px)`
    } 
  
    const stopDragging = () => {
      window.removeEventListener('mousemove', startDragging, false)
      window.removeEventListener('mouseup', stopDragging, false)
    }


    const [coords, setCoords] = useState({x: 0, y: 0});

    function sayHello() {
        alert('You clicked me!');
      }
  
    useEffect(() => {
      const handleWindowMouseMove = event => {
        setCoords({
          x: event.clientX,
          y: event.clientY,
        });
      };
      window.addEventListener('mousemove', handleWindowMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleWindowMouseMove,
        );
      };
    }, []);
  
    return (
      <div>
        <p>
          Mouse positioned at:{' '}
          <b>
            ({coords.x}, {coords.y}) 
            <div
             onMouseDown={initialiseDrag}
             ref={elemRef}
            >
             <button onClick={sayHello}>Default</button>
            </div>
            
          </b>
        </p>
      </div>
    );
  }
