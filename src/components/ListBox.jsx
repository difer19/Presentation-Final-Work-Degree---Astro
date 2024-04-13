import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./ListBoxWrapper.jsx";
import { itemsAgenda } from "../../public/js/const";

export default function App(props) {
  var current = "";
  if (props.selectedName == "Introduction") {
    current = "/1";
  } else if (props.selectedName == "Problem") {
    current = "/3";
  } else if (props.selectedName == "Goals") {
    current = "/10";
  } else if (props.selectedName == "framework") {
    current = "/11";
  } else if (props.selectedName == "Metodologia"){
    current = "/6";
  } else if (props.selectedName == "Resultados") {
    current = "/7";
  } else if (props.selectedName == "Conclusiones"){
    current = "/8";
  } else if (props.selectedName == "Recomendaciones") {
    current = "/9";
  }

  const [selectedKeys, setSelectedKeys] = React.useState(new Set([current]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    <ListboxWrapper>
      <Listbox
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {itemsAgenda.map((item) => (
          <ListboxItem
            key={item.url}
            href={item.url}
            className={
              item.url == current ? "bg-[#EEEEEF]" : "bg-transparent"
            }
          >
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>
      {/* <p className="text-small text-default-500">
        Selected value: {selectedValue}
      </p> */}
    </ListboxWrapper>
  );
}
