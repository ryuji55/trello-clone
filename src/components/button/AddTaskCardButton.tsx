import { Dispatch, memo, SetStateAction } from "react";
import styled from "styled-components";
import { TaskProps } from "../task/types/TaskProps";
import { v4 as uuid } from "uuid";

type Props = {
  taskCardsList: TaskProps[];
  setTaskCardsList: Dispatch<SetStateAction<TaskProps[]>>;
};

const AddTaskCardButton = memo(({ taskCardsList, setTaskCardsList }: Props) => {
  const taskCardId = uuid();
  const handleClick = () => {
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };

  return (
    <ButtonWrapper>
      <Button onClick={handleClick}>＋</Button>
    </ButtonWrapper>
  );
});

const ButtonWrapper = styled.div`
  margin 25px 0 0 1%;;
`;

const Button = styled.button`
  padding: 10px 18px;
  border-radius: 9999px;
  font-size: 30px;
  background-color: rgb(221, 194, 162);
  box-shadow: 3px 3px 8px 1px black;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;

export default AddTaskCardButton;
