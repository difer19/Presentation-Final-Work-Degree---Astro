import React, { useState } from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { Search } from "@geist-ui/react-icons";

export default function App() {
  // Estado para almacenar el número de página ingresado
  const [pageNumber, setPageNumber] = useState('');

  // Función para actualizar el estado con el valor del input
  const handleInputChange = (e) => {
    setPageNumber(e.target.value);
  };

  // Función para manejar la redirección
  const handleSearchClick = () => {
    // Asegurar que solo se redirija si pageNumber es un número válido y mayor que 0
    if (pageNumber > 0) {
      window.location.href = `/${pageNumber}`;
    }
  };

  return (
    <Card className="max-w-[261px] my-5">
      <CardBody>
        <div className="flex justify-end items-end">
          <div>
            <Input
              type="number"
              label="Página"
              value={pageNumber}
              onChange={handleInputChange} // Actualizar el valor al cambiar el input
            />
          </div>
          <Button
            className="bg-gray-500 hover:bg-gray-300 mx-4"
            size="lg"
            isIconOnly
            client:visible
            onClick={handleSearchClick} // Llamar a handleSearchClick al hacer clic en el botón
          >
            <Search color="#FFF"></Search>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
