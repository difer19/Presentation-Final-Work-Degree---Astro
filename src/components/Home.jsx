import React from "react";
import { Card, CardBody, Button, Link } from "@nextui-org/react";
import { Home } from '@geist-ui/react-icons';

export default function App() {
  return (
    <Card className="max-w-[261px] my-5">
      <CardBody className="h-full">
        {/* Modificación aquí: Cambia `class` por `className` y añade clases de flexbox para centrar */}
        <div className="flex justify-center items-center w-full h-full">
            <Button as={Link} href="/" variant="flat" className="bg-green-600" isIconOnly>
              <Home color="white" />
            </Button>
        </div>
      </CardBody>
    </Card>
  );
}
