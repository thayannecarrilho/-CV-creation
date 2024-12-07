import styled from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  background-color: #317dbe; 
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
  font-family: "Trebuchet MS";
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 2rem 0 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000047;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #6095be;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  color: #000050;
  outline: none;

  &:focus {
    border-color: #317dbe;
    box-shadow: 0 0 5px #317dbe;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-family: 'Helvetica';
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #6095be;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  color: #000050;
  resize: none;
  outline: none;
  height: 150px;

  &:focus {
    border-color: #317dbe;
    box-shadow: 0 0 5px #317dbe;
  }
`;

export const Button = styled.button`
  width: 50%;
  padding: 15px;
  border-radius: 8px;
  background-color: #000047;
  color: #fff;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a006b;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const StyledButton = styled(PDFDownloadLink)`
  text-decoration: none;
  color: inherit;
  padding: 15px;
  background-color: #000047;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  width: 50%;
  margin: 1rem;

  &:hover {
    background-color: #1a006b;
  }
`;


