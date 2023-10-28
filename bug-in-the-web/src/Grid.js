import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Car from './Car';

const Grid = () => {
    const [carPosition, setCarPosition] = useState({ row: 1, col: 1 });

  const handleMove = (newPosition) => {
    setCarPosition(newPosition);
  };

  const [, drop] = useDrop(() => ({
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.position.col + delta.x / 50);
      const top = Math.round(item.position.row + delta.y / 50);

      // Validate the new position, e.g., check for collisions or boundaries
      const newPosition = { row: Math.max(1, Math.min(top, 4)), col: Math.max(1, Math.min(left, 4)) };

      handleMove(newPosition);
    },
  }));

  return (
    <div>
      <div ref={drop} style={{ position: 'relative', width: '200px', height: '200px', border: '1px solid black' }}>
        <Car position={carPosition} />
      </div>
    </div>
  );
};

export default Grid;
