import React, { Component } from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 11px;
  background: none;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.green};
  margin-bottom: 15px;
  &::placeholder {
    color: ${({ theme }) => theme.green};
    transition: transform 0.3s;
  }
  &:focus::placeholder {
    transform: translateY(-50px);
  }
`;
