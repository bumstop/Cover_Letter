import { CloseButton } from "./components/button/CloseButton";
import styled from "styled-components";
import { useState } from "react";
import FloatingActionButtons from "./components/composite_components/FloatingActionButtons";

export function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App" style={{ height: "150vh", backgroundColor: "#373737" }}>
      <FloatingActionButtons />
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
