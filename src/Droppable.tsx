import {useDroppable} from '@dnd-kit/core';
import './Droppable.css';

export function Droppable(props: DroppableProps) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} id="droppable" style={style}>
      {props.children}
    </div>
  );
}

interface DroppableProps {
  id: string;
  children: React.ReactNode;
}