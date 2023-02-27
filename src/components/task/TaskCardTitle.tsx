import React, { memo, useState } from "react";
import styled from "styled-components";

const TaskCardTitle = memo(() => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => setIsClick(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClick(false);
  };
  const handleBlur = () => setIsClick(false);
  return (
    <Container onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <Input
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <Title>{inputCardTitle}</Title>
      )}
    </Container>
  );
});

const Container = styled.div`
  margin-bottom: 10px;
  width: 30%;
  cursor: pointer;
`;

const Input = styled.input`
  width: 80px;
  font-size: 1.1rem;
  padding: 4px 6px;
  border-radius: 3px;
  border: none;
  outline: none;
`;

const Title = styled.h3`
  white-space: nowrap;
`;

export default TaskCardTitle;
