import { CloseButton } from "./components/button/CloseButton";
import styled from "styled-components";
import { useState } from "react";

export function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <div>
        <CloseButton size="m" theme="dark" onClick={() => setIsOpen(false)} />
        {isOpen && <StyledDiv>컨텐츠</StyledDiv>}
        <StyledDiv>컨텐츠2</StyledDiv>
      </div>
    </div>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-top: 10px;
  margin-left: 10px;
`;
