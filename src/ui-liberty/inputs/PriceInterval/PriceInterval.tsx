import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FC, useState } from "react";
import { Container, Flex, Value, Wrapper } from "./styles";
import { IPriceIntervalProps } from "./types";

const PriceInterval: FC<IPriceIntervalProps> = ({
  onChangeMaxValue,
  onChangeMinValue,
}) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);

  return (
    <Wrapper className="price-interval">
      <Container>
        <Slider
          min={0}
          max={100000}
          range
          onChangeComplete={(value) => {
            if (Array.isArray(value)) {
              onChangeMinValue(value[0]);
              onChangeMaxValue(value[1]);
            }
          }}
          defaultValue={[0, 100000]}
          step={100}
          trackStyle={{ backgroundColor: "#ffcc00" }} // Custom track color
          handleStyle={{
            opacity: 1,
            backgroundColor: "#e9e9e9",
          }}
          railStyle={{ backgroundColor: "#e9e9ec" }}
          onChange={(value) => {
            if (Array.isArray(value)) {
              setMin(value[0]);
              setMax(value[1]);
            }
          }}
        />
      </Container>
      <Flex>
        <Value>{min}грн</Value>
        <Value>{max}грн</Value>
      </Flex>
    </Wrapper>
  );
};

export default PriceInterval;
