import React, { Dispatch, memo, SetStateAction } from "react";
import styled from "styled-components";
import { TaskProps } from "../task/types/TaskProps";
import { v4 as uuid } from "uuid";

type Props = {
  inputCardBody: string;
  setInputCardBody: React.Dispatch<React.SetStateAction<string>>;
  taskList: TaskProps[];
  setTaskList: Dispatch<SetStateAction<TaskProps[]>>;
};

const TaskAddInput = memo(
  ({ inputCardBody, setInputCardBody, taskList, setTaskList }: Props) => {
    const taskId = uuid();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputCardBody(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputCardBody === "") {
        return;
      }
      setTaskList([
        ...taskList,
        {
          id: taskId,
          draggableId: `task-${taskId}`,
          text: inputCardBody,
        },
      ]);
      setInputCardBody("");
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="add a task"
            value={inputCardBody}
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
);

const Input = styled.input`
  width: 100%;
  font-size: 1.1rem;
  padding: 10px 15px;
  border-radius: 3px;
  border: none;
  outline: none;
`;

export default TaskAddInput;
