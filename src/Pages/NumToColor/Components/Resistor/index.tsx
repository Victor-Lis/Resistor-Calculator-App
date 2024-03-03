import { Container, Bars, Body, BodyColor } from './styles'

export default function Resistor() {
 return (
   <Container>
    <Bars/>
    <Body>
      <BodyColor color='#00ff00'/>
      <BodyColor color='#0000ff'/>
      <BodyColor color='#ff0000'/>
    </Body>
    <Bars/>
   </Container>
  );
}