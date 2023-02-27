import { memo, useState } from "react";
import AddTaskCardButton from "../button/AddTaskCardButton";
import TaskCard from "./TaskCard";
import styled from "styled-components";
import { TaskProps } from "./types/TaskProps";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

const TaskCards = memo(() => {
  const [taskCardsList, setTaskCardsList] = useState<TaskProps[]>([]);
  const handleDragEnd = (result: DropResult) => {
    const remove = taskCardsList.splice(result.source.index, 1);
    result.destination &&
      taskCardsList.splice(result.destination.index, 0, remove[0]);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <TaskCardWrapper {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardsList.map((taskCardList, index) => (
              <TaskCard
                key={taskCardList.id}
                {...{ taskCardList, taskCardsList, setTaskCardsList, index }}
              />
            ))}
            <AddTaskCardButton {...{ taskCardsList, setTaskCardsList }} />
            {provided.placeholder}
          </TaskCardWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
});

const TaskCardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export default TaskCards;
