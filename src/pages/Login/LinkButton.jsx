import styled from "styled-components/macro";
import { Link } from 'react-router-dom';

export function LinkButton() {
  return (
    <StyledLink>
      <Link to="./" className="register" >회원가입</Link>
    </StyledLink>
  );
}

const StyledLink = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;

    & .register {
      height: 54px;
      width: 340px;
      line-height: 54px;
      border:2px solid #6C816D;
      border-radius: 4px;
      user-select: none;
      cursor: pointer;  
      margin:0 auto;
      font-size: 16px;
      font-weight: 600;
      background-color: #fff;
      color: #6C816D;
      margin-top: 12px;
      text-align: center;
      text-decoration: none;
    }
`;