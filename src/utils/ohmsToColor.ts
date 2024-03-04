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
  const firstDigit = Math.floor(value / 10);
  const firstDigitColor = findColorByValue(firstDigit);
  setColor1(firstDigitColor);

  // Encontra a cor do segundo dígito
  const secondDigit = Math.floor((value % 10) / 10);
  const secondDigitColor = findColorByValue(secondDigit);
  setColor2(secondDigitColor);

  // Encontra a cor do multiplicador
  const multiplier = value % 10 === 0 ? 1 : Math.floor(value % 10); // Ajuste aqui
  const multiplierColor = findColorByMultiplier(multiplier);
  setColor3(multiplierColor);
}

function findColorByValue(value: number): CorType | undefined {
  return cores.find((color) => color.valor === value.toString());
}

function findColorByMultiplier(multiplier: number): CorType | undefined {
  return cores.find((color) => color.multiplicador === multiplier);
}
