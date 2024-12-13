import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import './Sortable.css'
export function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div className="sortable-item" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      Item Number: { props.id }
    </div>
  );
}