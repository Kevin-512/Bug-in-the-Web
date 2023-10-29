import React from "react";
import captcha from'./images/captcha.png';
import {useEffect, useState, useRef} from 'react';

export default function Captcha() {
    const darkBoxRef = useRef(null)
    const btnRef = useRef(null)
    const [buttonState, setButtonState] = useState({x:0, y:0, allowed: true, dragged: false})
    const dragProps = useRef()
    const intervalIdRef = useRef(null);
    const [submitText, setSubmitText] = useState("")
    
    const initialiseDrag = (event) => {
      if (!buttonState.allowed) {
        const { target, clientX, clientY } = event
        const { offsetTop, offsetLeft } = target
        const { left, top } = btnRef.current.getBoundingClientRect()
        
        dragProps.current = {
          dragStartLeft: left - offsetLeft,
          dragStartTop: top - offsetTop,
          dragStartX: clientX,
          dragStartY: clientY
        }
        window.addEventListener('mousemove', startDragging, false)
        window.addEventListener('mouseup', stopDragging, false)

        setButtonState((prevState) => ({
          ...prevState,
          dragged: true,
        }))
      }
    }
    
    
    const startDragging = ({ clientX, clientY }) => {    
      btnRef.current.style.transform = `translate(${dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX}px, ${dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY}px)`
    } 
  
    const stopDragging = (event) => {
      window.removeEventListener('mousemove', startDragging, false);
      window.removeEventListener('mouseup', stopDragging, false);
      const darkBoxRect = darkBoxRef.current.getBoundingClientRect();
      const boundRange = 20;
      if (
        event.clientX >= darkBoxRect.left - boundRange &&
        event.clientX <= darkBoxRect.right + boundRange &&
        event.clientY >= darkBoxRect.top - boundRange &&
        event.clientY <= darkBoxRect.bottom + boundRange
      ) {
        console.log("called")
        setButtonState((prevState) => ({
          ...prevState,
          x: 0,
          y: 0,
          allowed: true,
        }))
        btnRef.current.style.transform = '';
      }
    }

    const VerifyBoxStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      width: "300px",
      height: "50px",
      border: "solid 1px gray"
    }

    const submitStyle = {
      cursor: "pointer",
      position: "relative",
      left: `${buttonState.x}px`,
      top: `${buttonState.y}px`,
      width: "60px",
      height: "25px"
    }

    const darkBoxStyle = {
      width: '60px',
      height: '25px',
      backgroundColor: "darkgray",
    };

    const handleSubmit = (e) => {
      if (buttonState.allowed && !buttonState.dragged) {
        console.log("move button")
        const startX = buttonState.x; // Initial x-coordinate
        const distanceX = 300; // Fixed x distance (adjust as needed)
        const speed = 0.05; // Adjust the speed of the sine wave

        let currentX = startX;
        let velocity = 5;

        // Set an interval to update the position every 0.1 seconds
        intervalIdRef.current = setInterval(() => {
          currentX += velocity;
          const newY = Math.sin(currentX * speed) * 30; // Adjust the amplitude (30) as needed
    
          setButtonState((prevState) => ({
            ...prevState,
            x: currentX,
            y: newY,
            allowed: false,
          }));

          // Check if the button has reached the specified distance
          if (currentX < startX || (currentX - startX >= distanceX)) {
            velocity = -velocity; // Change the direction to move backward
          }
        }, 50);
      }
      else if (buttonState.allowed && buttonState.dragged) {
        console.log("passed")
        setSubmitText("Successfully verified")
      }  
    };

    useEffect(() => {
      if (buttonState.dragged) {
        clearInterval(intervalIdRef.current);
      }
    }, [buttonState.dragged]);
  
    return (
      <div>
          <div style={VerifyBoxStyle}>
            <div ref={darkBoxRef} style={darkBoxStyle}>
              <button ref={btnRef} onMouseUp={handleSubmit} onMouseDown={initialiseDrag} style={submitStyle}>Verify</button>
            </div>
            <p>I'm not a robot</p>
            <img src={captcha} alt="captcha" style={{width: 50, height: 50}}></img>
          </div>
          <p>
            {submitText}
          </p>
      </div>
    );
  }
