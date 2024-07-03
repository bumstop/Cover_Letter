import { CloseButton } from "./components/button/CloseButton";
import styled from "styled-components";
import { closeIcon } from "./assets/images";
import { useRef } from "react";

export function App() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <div>
        <CloseButton
          $width="4rem"
          $height="4rem"
          $bgColor="#373737"
          $borderRadius="50%"
          closeTarget={ref}
        >
          <img src={closeIcon} alt="closeIcon" />
        </CloseButton>
        <StyledDiv ref={ref}>컨텐츠</StyledDiv>
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
