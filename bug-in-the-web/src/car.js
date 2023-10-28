import React, { useState, useRef, useEffect } from 'react';
import CarR from './images/redcar.png'
const DraggableObject = ({ id }) => {
    const [isDragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const dragRef = useRef(null);

    const handleMouseDown = (e) => {
        setDragging(true);
    };

    const handleMouseUp = (e) => {
        setDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const newX = e.clientX - dragRef.current.clientWidth / 2;
        setPosition((prevPosition) => ({
            ...prevPosition,
            x: newX,
        }));
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

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
    return (
        <div style={{ position: 'relative', height: '200px', width: '400px' }}>
            <DraggableObject id={1} />
            <DraggableObject id={2} />
        </div>
    );
};

export default App;