import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {DndContext} from '@dnd-kit/core';
import {Draggable} from './Draggable.tsx';
import {Droppable} from './Droppable.tsx';
function App() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      Go ahead, drag me.
    </Draggable>
  );
  function handleDragEnd(args: any) {
    const {over} = args;
    setParent(over ? over.id : null);
  }
  return (
    <>
    <h4>Hello from React 19 with dnd-kit</h4>
       <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : 'Drop here'}
      </Droppable>
    </DndContext>
    </>
  )
}

export default App
