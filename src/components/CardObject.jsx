import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function App(props) {
  return (
    <Card className="max-w-[400px] mr-4">
      <CardHeader className="flex gap-3">
        <Image
          alt="medical"
          height={80}
          radius="sm"
          src={props.url_category}
          width={50}
        />
        <div className="flex flex-col">
          <p className={props.texts}>{props.title}</p>
          <p className="text-sm">{props.years}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <Image
          alt="medical"
          height={400}
          radius="sm"
          src={props.url_image}
          width={300}
        />
      </CardBody>
      <Divider/>
      <CardFooter>

      </CardFooter>
    </Card>
  );
}