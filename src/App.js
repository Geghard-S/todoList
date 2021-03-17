import './App.css';
import { useState } from 'react';
import Boxes from './components/Boxes'
import New from './components/New'

function App() {

  const [boxes, setBoxes] = useState([
    {color: "blue", status: false},
    {color: "red", status: false},
    {color: "green", status: false},
    {color: "yellow", status: false}
  ])

  const createBox = (box) => {
    setBoxes([...boxes, box])
  };

  const deleteBox = (deleteIndex) => {
    setBoxes(boxes.filter((box, i) => i !== deleteIndex ? true : false));

  }

  const updateBox = (idx) => {
    const copyBoxes = [...boxes];
    copyBoxes[idx].status = !copyBoxes[idx].status;
    setBoxes(copyBoxes);
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <New createBox={createBox}/>
      <Boxes boxes={boxes} deleteBox={deleteBox} updateBox={updateBox} />
    </div>
  );
}

export default App;
