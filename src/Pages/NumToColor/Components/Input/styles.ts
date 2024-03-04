import styled from "styled-components/native";

export const Container = styled.View`
  /* background-color: #fff; */
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 10px;
  max-height: 50px;
`;

export const InputText = styled.Text`
  flex: 1;
  text-align: left;
  color: #fff;
`;

export const Input = styled.TextInput`
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 8px 2.5%;
  margin: 2px 0;
  width: 50%;
  text-align: center;
`;
