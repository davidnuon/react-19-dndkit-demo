import { useState } from 'react'
import './App.css'

import { DndContext } from '@dnd-kit/core';
import { Draggable } from './Draggable.tsx';
import { Droppable } from './Droppable.tsx';
import { SortableDemo } from './SortableDemo.tsx';
function App() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      Go ahead, drag me.
    </Draggable>
  );
  function handleDragEnd(args: any) {
    const { over } = args;
    setParent(over ? over.id : null);
  }
  return (
    <>
      <h2>Hello from React 19 with <a href="https://dnd-kit.com">dnd-kit</a></h2>
      <p>
        I took this code from the dnd-kit demo. <br>
        </br>
        This wasn't wokring in React 19 <span title="on December 3rd"><strong>a week ago on 12/2/24</strong></span>,
        but now it ✨ <i>does</i> ✨

        <br/><br/>
        <a href="https://github.com/davidnuon/react-19-dndkit-demo">View the source code</a>
      </p>
      <hr/>
      <h2>Draggable Demo</h2>
      <DndContext onDragEnd={handleDragEnd}>
        {!parent ? draggable : null}
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : 'Drop here'}
        </Droppable>
      </DndContext>

      <h2>Sortable Demo</h2>
      <SortableDemo />
    </>
  )
}

export default App
