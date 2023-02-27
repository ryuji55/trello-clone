import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { TaskProps } from "./types/TaskProps";
import { memo } from "react";

type Props = {
  task: TaskProps;
  taskList: TaskProps[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  index: number;
};
const Task = memo(({ task, taskList, setTaskList, index }: Props) => {
  const handleDelete = (taskId: string) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskBox>
            <TaskText>{task.text}</TaskText>
            <Button onClick={() => handleDelete(task.id)}>
              <i className="fa-sharp fa-solid fa-trash-can"></i>
            </Button>
          </TaskBox>
        </div>
      )}
    </Draggable>
  );
});

const TaskBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgb(75, 75, 75);
`;

const TaskText = styled.p`
  margin-left: 12px;
`;
const Button = styled.button`
  margin-right: 9px;
  border: none;
  cursor: pointer;
`;

export default Task;
