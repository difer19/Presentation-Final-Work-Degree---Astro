import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { ArrowRight, ArrowLeft } from "@geist-ui/react-icons";
import Aknow from "../pages/aknow.astro";

export default function App(props) {
  var next = props.current + 1;
  var prev = props.current - 1;
  var aknowq = "aknow"

  if (props.current == 1) {
    return (
      <Card className="max-w-[261px] my-5 ">
        <CardBody>
          <div className="flex justify-center items-center">
            <a href={prev}>
              <Button
                disabled
                className="bg-blue-950 hover:bg-blue-300 mx-4"
                isIconOnly
                color="primary"
                client:visible
              >
                <ArrowLeft></ArrowLeft>
              </Button>
            </a>

            <h1 className="mx-8">{props.current}</h1>

            <a href={next}>
              <Button
                className="bg-blue-950 hover:bg-blue-300 mx-4"
                isIconOnly
                color="primary"
                client:visible
              >
                <ArrowRight></ArrowRight>
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
    );
  } else if (props.current == 51) {
    return (
      <Card className="max-w-[261px] my-5 ">
        <CardBody>
          <div className="flex justify-center items-center">
            <a href={prev}>
              <Button
                className="bg-blue-950 hover:bg-blue-300 mx-4"
                isIconOnly
                color="primary"
                client:visible
              >
                <ArrowLeft></ArrowLeft>
              </Button>
            </a>

            <h1 className="mx-8">{props.current}</h1>

            <a href={aknowq}>
              <Button
                className="bg-blue-950 hover:bg-blue-300 mx-4"
                isIconOnly
                color="primary"
                client:visible
              >
                <ArrowRight></ArrowRight>
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
    );
  } else {
    return (
      <Card className="max-w-[261px] my-5 ">
        <CardBody>
          <div className="flex justify-center items-center">
            <a href={prev}>
              <Button
                className="bg-blue-950 hover:bg-blue-300 mx-4"
                isIconOnly
                color="primary"
                client:visible
              >
                <ArrowLeft></ArrowLeft>
              </Button>
            </a>

            <h1 className="mx-8">{props.current}</h1>

            <a href={next}>
              <Button
                className="bg-blue-950 hover:bg-blue-300 mx-4"
                isIconOnly
                color="primary"
                client:visible
              >
                <ArrowRight></ArrowRight>
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
    );
  }
}
