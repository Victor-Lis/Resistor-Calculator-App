import { Container, Bars, Body, BodyColor, BodyCircle, BodyMain } from './styles'

type Props = {
  color1?: string;
  color2?: string;
  color3?: string;
}

export default function Resistor({color1, color2, color3}: Props) {
 return (
   <Container>
    <Bars/>
    <Body>
      <BodyCircle>
        <BodyColor color={color1}/>
      </BodyCircle>
      <BodyMain>
        <BodyColor color={color2}/>
        <BodyColor color={color3}/>
        <BodyColor/>
      </BodyMain>
      <BodyCircle/>
    </Body>
    <Bars/>
   </Container>
  );
}