import React, { useState } from "react";
import { CorType } from "../../@types/cor";
import { Container, Form } from "./styles";
import Resistor from "../../components/Resistor";
import Input from "./Components/Input";

export default function NumToColor() {
  const [color1, setColor1] = useState<CorType | null>();
  const [color2, setColor2] = useState<CorType | null>();
  const [color3, setColor3] = useState<CorType | null>();
  return (
    <Container>
      <Resistor color1={color1?.hex} color2={color2?.hex} color3={color3?.hex} />
      <Form>
        <Input 
          title="Número de ohms" 
          setColor1={setColor1} setColor2={setColor2} setColor3={setColor3}
        />
      </Form>
    </Container>
  );
}
