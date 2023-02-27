import Task from "./Task";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { TaskProps } from "./types/TaskProps";
import { memo } from "react";

type Props = {
  taskList: TaskProps[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
};
const Tasks = memo(({ taskList, setTaskList }: Props) => {
  const handleDragEnd = (result: DropResult) => {
    const remove = taskList.splice(result.source.index, 1);
    result.destination &&
      taskList.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task {...{ task, taskList, setTaskList, index }} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

export default Tasks;
