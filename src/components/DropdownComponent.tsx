import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { ViewMain, DiviseView } from "../components/style";

interface Item {
  label: string;
  value: string;
}

const data = [
  { label: "Aluno", value: "1" },
  { label: "Servidor", value: "2" },
];

const optionsByValue: { [key: string]: Item[] } = {
  "1": [
    { label: "Engenharia de Alimentos", value: "G1" },
    { label: "Sistemas de Informação", value: "G2" },
    { label: "Agroindustria", value: "G3" },
    { label: "Agropecuária", value: "G4" },
    { label: "Física", value: "G5" },
    { label: "Matematica", value: "G6" },
    { label: "Administração", value: "G7" },
    { label: "Probabilidade e Estatistica", value: "G8" },
  ],
  "2": [
    { label: "Administrador", value: "S1" },
    { label: "Estágiario", value: "S2" },
    { label: "Professor", value: "S3" },
    { label: "Secretário", value: "S4" },
    { label: "Diretor", value: "S5" },
  ],
};

export function DoubleDropdownComponent() {
  const [roleValue, setRoleValue] = useState<string | null>(null);
  const [subRoleValue, setSubRoleValue] = useState<string | null>(null);
  const [isRoleFocus, setIsRoleFocus] = useState(false);
  const [isSubRoleFocus, setIsSubRoleFocus] = useState(false);

  return (
    <ViewMain>
      <DiviseView>
        <Text style={[styles.labelRole, isRoleFocus && { color: "#FFFFFF" }]}>
          Função
        </Text>
        <Dropdown
          style={[styles.dropdown, isRoleFocus && { borderColor: "White" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Selecione Uma Opção"}
          searchPlaceholder="Procurar ..."
          value={roleValue}
          onFocus={() => setIsRoleFocus(true)}
          onBlur={() => setIsRoleFocus(false)}
          onChange={(item: Item) => {
            setRoleValue(item.value);
            setSubRoleValue(null);
            setIsRoleFocus(false);
          }}
        />
      </DiviseView>

      <DiviseView>
        <Text
          style={[styles.labelSubRole, isSubRoleFocus && { color: "#FFFFFF" }]}
        >
          Opção
        </Text>
        <Dropdown
          style={[styles.dropdown, isSubRoleFocus && { borderColor: "White" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={optionsByValue[roleValue || ""] || []}
          maxHeight={300}
          labelField="label"
          valueField="value"
          search
          placeholder={"Selecione Uma Opção"}
          searchPlaceholder="Procurar ..."
          value={subRoleValue}
          onFocus={() => setIsSubRoleFocus(true)}
          onBlur={() => setIsSubRoleFocus(false)}
          onChange={(item: Item) => {
            setSubRoleValue(item.value);
            setIsSubRoleFocus(false);
          }}
        />
      </DiviseView>
    </ViewMain>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 300,
    borderColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  labelRole: {
    position: "absolute",
    backgroundColor: "#151f42",
    left: 10,
    top: -10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: "#FFFFFF",
  },
  labelSubRole: {
    position: "absolute",
    backgroundColor: "#151f42",
    left: 10,
    top: -10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: "#FFFFFF",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 10
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
