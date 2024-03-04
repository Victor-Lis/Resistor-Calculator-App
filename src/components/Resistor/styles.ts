import styled from "styled-components/native";

export const Container = styled.View`
  /* background-color: #fff; */
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Bars = styled.View`
  background-color: #626262;
  height: 10px;
  flex: 1;
`;

export const Body = styled.View`
  /* background-color: #fadcaf; */
  flex: 3;
  height: 100%;
  border-radius: 30px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BodyCircle = styled.View`
  height: 100%;
  flex: 1;
  background-color: #fadcaf;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const BodyMain = styled.View`
  height: 70%;
  flex: 1.75;
  background-color: #fadcaf;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

interface BodyColorProps {
  color?: string;
}

export const BodyColor = styled.View<BodyColorProps>`
  height: 100%;
  width: 20px;
  background-color: ${(props) => (props.color ? props.color : "transparent")};
`;
