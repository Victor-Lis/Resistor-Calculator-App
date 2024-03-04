import { CorType } from "../@types/cor";
import { cores } from "./cores";

type Props = {
  value: number;
  setColor1: React.Dispatch<React.SetStateAction<CorType | null | undefined>>;
  setColor2: React.Dispatch<React.SetStateAction<CorType | null | undefined>>;
  setColor3: React.Dispatch<React.SetStateAction<CorType | null | undefined>>;
};

export function ohmsToColor({ value, setColor1, setColor2, setColor3 }: Props) {
  // Encontra a cor do primeiro dígito
  const firstDigit = !!parseInt(`${Math.floor(value / 10)}`[0])
    ? parseInt(`${Math.floor(value / 10)}`[0])
    : parseInt(`${Math.floor(value)}`[0]);
  const firstDigitColor = findColorByValue(firstDigit);

  // Encontra a cor do segundo dígito
  const secondDigit = !!parseInt(`${Math.floor(value / 10)}`[1])
    ? parseInt(`${Math.floor(value / 10)}`[1])
    : parseInt(`${Math.floor(value)}`[1]);
  const secondDigitColor = findColorByValue(secondDigit);

  // Encontra a cor do multiplicador
  let multiplier = 0;
  cores.map((cor) => {
    if (cor.multiplicador * parseInt(`${firstDigit}${secondDigit}`) == value) {
      multiplier = cor.multiplicador;
    }
  });
  const multiplierColor = findColorByMultiplier(multiplier);

  if (!!firstDigitColor && !!secondDigitColor && !!multiplier) {
    setColor1(firstDigitColor);
    setColor2(secondDigitColor);
    setColor3(multiplierColor);
  }
}

function findColorByValue(value: number): CorType | undefined {
  const color = cores.find((c) => c.valor === value.toString());
  if (color) {
    //   throw new Error(`Cor não encontrada para o valor ${value}`);
    return color;
  }
}

function findColorByMultiplier(multiplier: number): CorType | undefined {
  return cores.find((color) => color.multiplicador === multiplier);
}
