import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function App(props) {
  return (
    <Card className="w-5/6 mr-4">
      <CardHeader className="flex gap-3">
        <Image
          alt="medical"
          height={80}
          radius="sm"
          src={props.url_category}
          width={60}
        />
        <div className="flex flex-col ml-8">
          <p className={props.texts}>{props.title}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}