import React from 'react';
import { useDrag } from 'react-dnd';

const Car = ({ position }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    item: { position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const carStyle = {
    width: '50px',
    height: '30px',
    backgroundColor: 'blue',
    position: 'absolute',
    top: `${position.row * 50}px`,
    left: `${position.col * 50}px`,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  return <div ref={drag} style={carStyle}></div>;
};

export default Car;
