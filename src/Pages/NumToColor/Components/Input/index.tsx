import { ScrollView, Text } from "react-native";
import { Container, InputBox, InputText, Input } from "./styles";
import { useState } from "react";
import { CorType } from "../../../../@types/cor";
import { ohmsToColor } from "../../../../utils/ohmsToColor";

type Props = {
  title: string;
  setColor1: React.Dispatch<React.SetStateAction<CorType | null | undefined>>;
  setColor2: React.Dispatch<React.SetStateAction<CorType | null | undefined>>;
  setColor3: React.Dispatch<React.SetStateAction<CorType | null | undefined>>;
};

export default function InputComponent({ title, setColor1, setColor2, setColor3 }: Props) {
    return (
      <InputBox>
        <InputText>{title}</InputText>
        <Input keyboardType="numeric" placeholder="30Ω" onChangeText={(e) => {
          ohmsToColor({value: parseInt(e), setColor1: setColor1, setColor2: setColor2, setColor3: setColor3})
        }}/>
      </InputBox>
    );
}
