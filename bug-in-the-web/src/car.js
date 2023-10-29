import React, { useState, useRef, useEffect } from 'react';
import CarR from './images/redcar.png'
const DraggableObject = ({ id, initialX, onMove, positions  }) => {
    const [isDragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: initialX, y: 0 });
    const dragRef = useRef(null);
  
    const handleMouseDown = (e) => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseUp = (e) => {
      document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseMove = (e) => {
        //if (!isDragging) return;
        const newX = e.clientX - dragRef.current.clientWidth /2;
        if (onMove) {
          onMove(id, newX);
        }
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: newX,
        }));
      };
  
    // useEffect(() => {
    //   document.addEventListener('mousemove', handleMouseMove);
    //   document.addEventListener('mouseup', handleMouseUp);
  
    //   return () => {
    //     document.removeEventListener('mousemove', handleMouseMove);
    //     document.removeEventListener('mouseup', handleMouseUp);
    //   };
    // }, [isDragging]);
  
    const spacing = 100; // adjust as needed
  

    return (
        <img
            ref={dragRef}
            src={CarR}
            draggable={false}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                width: '50px',
                height: '50px',
                // backgroundColor: id === 1 ? 'red' : 'blue',
                cursor: 'grab',
            }}
            onMouseDown={handleMouseDown}

        ></img>
    );
};

const App = () => {

    const [positions, setPositions] = useState({ 1: 200, 2: 300 });
    
  const isColliding = positions[1] + 50 > positions[2] && positions[2] + 50 > positions[1];

    const handleObjectMove = (id, newX) => {
          setPositions((prevPositions) => ({
            ...prevPositions,
            [id]: newX,
            }));

    };


    const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;
      setPosition({ x: newX, y: newY });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const buttonStyle = {
    position: 'absolute',
    left: position.x + 'px',
    top: position.y + 'px',
  };

  
  
    return (
    <div style={{ position: 'relative', height: '200px', width: '400px' }}>
      <DraggableObject id={1} initialX={positions[1]} onMove={handleObjectMove} />
      <DraggableObject id={2} initialX={positions[2]} onMove={handleObjectMove} style={{ marginLeft: '100px' }} />
      {isColliding && <p style={buttonStyle} onClick={handleButtonClick}>Click Me!</p>}
    </div>

    );
};

export default App;