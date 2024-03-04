import { ScrollView, Text } from "react-native";
import { Container, InputBox, SelectBox, InputText, SelectTitle } from "./styles";
import { useState } from "react";
import { CorType } from "../../../../@types/cor";

type Props = {
  array: CorType[];
  selected?: CorType | null;
  title: string;
  setItem: React.Dispatch<React.SetStateAction<CorType | null | undefined>>;
};

export default function Select({ array,  selected, title, setItem }: Props) {

  const [open, setOpen] = useState<boolean>(false)

  if (open) {
    return (
      <ScrollView style={{ width: "90%", height: 50, marginHorizontal: "5%" }}>
        {array.map((item, index) => (
          <SelectBox
            key={index} // Use index as a unique key
            onPress={() => {
              setOpen(false)
              setItem(item)
            }}
          >
            <Text>{item.title}</Text>
          </SelectBox>
        ))}
      </ScrollView>
    );
  } else {
    return (
      <InputBox>
        <InputText>{title}</InputText>
        <SelectBox onPress={() => setOpen(!open)}>
          <SelectTitle style={{ minWidth: "50%" }}>
            {open ? `Selecione um ${title}` : selected?.title}
          </SelectTitle>
        </SelectBox>
      </InputBox>
    );
  }
}
