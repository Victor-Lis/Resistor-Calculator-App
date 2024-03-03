import React, { useState } from "react";
import { cores } from "../../utils/cores";
import { calcularOhmns } from "../../utils/calcularOhms";
import { CorType } from "../../@types/cor";
import { Container, Form, Result } from "./styles";
import Resistor from "./Components/Resistor";
import Select from "./Components/Select";

export default function NumToColor() {
  const [color1, setColor1] = useState<CorType | null>();
  const [color2, setColor2] = useState<CorType | null>();
  const [color3, setColor3] = useState<CorType | null>();

  return (
    <Container>
      <Resistor color1={color1?.hex} color2={color2?.hex} color3={color3?.hex} />
      <Form>
        <Select array={cores} title="Faixa 1" setItem={setColor1} selected={color1}/>
        <Select array={cores} title="Faixa 2" setItem={setColor2} selected={color2}/>
        <Select array={cores.filter((cor) => cor.title != "Cinza" && cor.title != "Branco")} title="Faixa 3" setItem={setColor3} selected={color3}/>
      </Form>
      <Result>
        {(!!color1 && !!color2 && !!color3) && calcularOhmns({
          valor1: color1.valor,
          valor2: color2.valor,
          multiplicador: color3.multiplicador,
        })}
      </Result>
    </Container>
  );
}
