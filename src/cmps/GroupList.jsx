import { GroupPreview } from './GroupPreview.jsx';
import { Droppable } from 'react-beautiful-dnd';

export function GroupList({ groups, board, toggleEditOpen, updateGroup }) {
  return (
    <Droppable droppableId={'all-groups'} type="group" direction='horizontal'>
        {provided =>(

      <div className="group-list-container flex" {...provided.droppableProps}
      ref={provided.innerRef}>
        {groups.map((group, index) => {
          return (
            <GroupPreview
              key={group.id}
              toggleEditOpen={toggleEditOpen}
              group={group}
              board={board}
              index={index}
              updateGroup={updateGroup}
            />
          );
        })}
        {provided.placeholder}
      </div>
        )}
    </Droppable>
  );
}
