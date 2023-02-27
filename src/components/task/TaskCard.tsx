import { Dispatch, memo, SetStateAction } from "react";
import TaskCardDeleteButton from "../button/TaskCardDeleteButton";
import TaskAddInput from "../input/TaskAddInput";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";
import styled from "styled-components";
import { useState } from "react";
import { TaskProps } from "./types/TaskProps";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  taskCardsList: TaskProps[];
  setTaskCardsList: Dispatch<SetStateAction<TaskProps[]>>;
  taskCardList: TaskProps;
  index: number;
};

const TaskCard = memo(
  ({ taskCardsList, setTaskCardsList, taskCardList, index }: Props) => {
    const [inputCardBody, setInputCardBody] = useState("");
    const [taskList, setTaskList] = useState<TaskProps[]>([]);
    return (
      <Draggable draggableId={taskCardList.id} index={index}>
        {(provided) => (
          <TaskCardContainer
            className="taskCard"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <TaskCardTitleAndDeleteButton {...provided.dragHandleProps}>
              <TaskCardTitle />
              <TaskCardDeleteButton
                {...{ taskCardsList, setTaskCardsList, taskCardList }}
              />
            </TaskCardTitleAndDeleteButton>
            <TaskAddInput
              {...{ inputCardBody, setInputCardBody, taskList, setTaskList }}
            />
            <Tasks {...{ taskList, setTaskList }} />
          </TaskCardContainer>
        )}
      </Draggable>
    );
  }
);

const TaskCardContainer = styled.div`
  width: 250px;
  padding: 10px 25px;
  margin: 10px 1%;
  background-color rgb(228, 228, 228);
  border-radius: 5px;
`;

const TaskCardTitleAndDeleteButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default TaskCard;
