import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: flex;
  margin: 0 auto;
  padding: 0 8px;
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}