import React, {useRef} from "react";
import {useEffect, useState} from 'react';
import redCar from './images/redcar.png';
import goldCar from './images/goldcar.png';
import {useMemo} from "react";
import placeHolderGrid from './images/placeholderGrid.png';

function BoxTest(){

    const gridStyle = {

        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gridTemplateRows: "repeat(4,1fr)",
        width: "400px",
        height: "400px",
        border: "1px black solid",

    }
    const [carState, setCarState] = useState([{src:redCar, row: 0, col: 0, orientation: "horizontal", span: 2},{src:goldCar, row: 2, col: 2, orientation: "vertical", span: 2}])
    const handleOnClick=()=>{

    }
    const [grid, setGrid] = useMemo(()=> {
        const temporaryGrid = Array.from({length: 4},() => Array(4).fill(0));
        const newGrid = carState.map(car => {
            let i = car.row;
            let j = car.col;
            temporaryGrid[i][j] = 1;
            for(let i=0; i<car.span;i++){
                if (car.orientation === "horizontal"){
                    j+=1;
                    temporaryGrid[i][j]=1;
                } else if(car.orientation === "vertical" ){
                    i += 1;
                    temporaryGrid[i][j]= 1;
                }
            }
            setGrid(temporaryGrid);
        } )
    },[carState])
    function displayGrid(){
        for(let i=0; i<grid.length; i++){
            for(let j = 0; j< grid[i].length;j++){
                if (grid[i][j] === 0){

                }
            }
        }

    }

    return (
         <div style={gridStyle}>
             {grid ? return ({grid.map((row, i) => (
                     <div key={i}>
                         {row.map((cell, j) => (
                             <span key={j}>{cell} </span>
                         ))}
                     </div>
                 ))}); : <div></div>}
         </div>
    );
}

export default BoxTest;



