import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #2c3e50;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

  input {
    border-radius: 4px;
    background-color: rgb(177, 186, 179);
    margin: 5px;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;

    &:hover {
      color: #3498db;
    }
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: auto;
    margin-right: auto;

    &:hover {
      background-color: #2c3e50;
      color: #fff;
    }
  }

  p {
    text-align: center;
  }

  nav {
    display: flex;

    a {
      color: #fff;
      text-decoration: none;
      margin-right: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        color: #3498db;
      }
    }
  }
`;