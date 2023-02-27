import { Dispatch, memo, SetStateAction } from "react";
import styled from "styled-components";
import { TaskProps } from "../task/types/TaskProps";

type Props = {
  taskCardsList: TaskProps[];
  setTaskCardsList: Dispatch<SetStateAction<TaskProps[]>>;
  taskCardList: TaskProps;
};

const TaskCardDeleteButton = memo(
  ({ taskCardsList, setTaskCardsList, taskCardList }: Props) => {
    const handleClick = (id: string) => {
      setTaskCardsList(
        taskCardsList.filter((e) => {
          console.log(e);
          return e.id !== id;
        })
      );
    };

    return (
      <div>
        <Button onClick={() => handleClick(taskCardList.id)}>
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
    );
  }
);

const Button = styled.button`
  border: none;
  background-color: rgb(228, 228, 228);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: rgb(158, 46, 46);
`;

export default TaskCardDeleteButton;
