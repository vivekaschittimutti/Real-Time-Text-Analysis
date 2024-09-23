
import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Arial', sans-serif;
  background-color: #e7f1ff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 2px solid #3498db;
  border-radius: 5px;
  outline: none;
`;

export const Stats = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 18px;
    color: #34495e; 
    margin: 5px 0;
    background: #ecf0f1; 
    padding: 10px;
    border-radius: 5px;
  }
`;

export const ReplaceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 2px solid #27ae60;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  padding: 15px;
  font-size: 16px;
  color: #fff;
  background-color: #2980b9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
