import { Card, CardBody, Button } from "@nextui-org/react";
import { Link } from '@geist-ui/react-icons';

export default function Item(props) {
  return (
    <Card>
      <CardBody>
        <div class=" w-full flex flex-col items-center justify-between md:flex-row">
          <div class="flex flex-col items-center md:flex-row md:space-x-4">
            <h1 className="mx-4 text-2xl mb-4 md:mb-0">{props.number}</h1>
            <p className="mx-4 text-2xl mb-4 md:mb-0">{props.name}</p>
          </div>
          <a href={props.url}>
            <Button
              className="bg-purple-500 hover:bg-purple-300"
              isIconOnly
              color="primary"
              client:visible
            >
              <Link></Link>
            </Button>
          </a>
        </div>
      </CardBody>
    </Card>
  );
}
