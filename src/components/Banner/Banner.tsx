import { Button } from "@chakra-ui/react";
import "./ฺBanner.scss";
import "../../styles/components/_button.scss";
import model1 from "../../assets/model1.png";
export function Banner() {
  return (
    <div className="banner">
      <div>
        <p>Grab Upto 50% Off On Selected Headphone</p>
        <Button className="button-secondary">Buy Now</Button>
      </div>
      <img src={model1} />
    </div>
  );
}
