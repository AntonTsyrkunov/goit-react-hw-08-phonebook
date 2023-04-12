import styled from 'styled-components';

export const StyledContactsList = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #f5f5f5;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  li>p {
    font-size: 16px;
  }

  li:hover {
    background-color: #e9e9e9;
  }

  button {
    background-color: rgb(52, 152, 219);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin: 0;
  }

  button:hover {
    background-color: rgb(201, 142, 105);
  }

  p {
    margin: 4px;
  }
`;