import React, { Component } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px
  margin:20px;
  background: none;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.green};
`;
