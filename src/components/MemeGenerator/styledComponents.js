import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 20px;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    font-size: 36px;
    text-align: left;
    margin-bottom: 30px;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 300px;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 400px;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    height: 450px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  z-index: 2;
  max-width: 100%;
  word-wrap: break-word;
  padding: 0 10px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
    gap: 25px;
  }
`

export const CustomLabel = styled.label`
  color: #5a7184;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const CustomInput = styled.input`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  padding: 12px 15px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #35469c;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px 18px;
  }
`

export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  height: 48px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  padding: 0 15px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #35469c;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    height: 52px;
  }
`

export const CustomOption = styled.option`
  font-size: 14px;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  border: none;
  padding: 14px 24px;
  margin-top: 10px;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #095cd4;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(11, 105, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    padding: 16px 32px;
    margin-top: 20px;
  }
`
