import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px
  margin:20px;
  background: none;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.lightgreen};
  color: ${({ theme }) => theme.lightgreen};
  position:relative;
  
  &:hover::before, &:hover::after{
    height: 15px;
    top: calc(100% - 15px);
  }
  &::after,&::before{
    content: "";
    position: absolute;
    top: calc(100% - 7px);
    height: 7px;
    width: 2px;
    background-color: #BDEFE5;
    transition:all .3s;
  }
  &::after{
    left: 0%;
  }
  &::before{
    left: calc(100% - 2px);
  }
`;
