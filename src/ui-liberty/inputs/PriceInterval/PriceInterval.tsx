import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FC } from "react";
import { Container, Flex, Value, Wrapper } from "./styles";
import { IPriceIntervalProps } from "./types";

const PriceInterval: FC<IPriceIntervalProps> = ({
  maxValue,
  minValue,
  onChangeMaxValue,
  onChangeMinValue,
}) => (
  <Wrapper className="price-interval">
    <Container>
      <Slider
        min={0}
        max={10000}
        range
        defaultValue={[0, 10000]}
        step={10}
        trackStyle={{ backgroundColor: "#ffcc00" }} // Custom track color
        handleStyle={{
          opacity: 1,
          backgroundColor: "#e9e9e9",
        }}
        railStyle={{ backgroundColor: "#e9e9ec" }}
        onChange={(value) => {
          if (Array.isArray(value)) {
            onChangeMaxValue(value[1]);
            onChangeMinValue(value[0]);
          }
        }}
      />
    </Container>
    <Flex>
      <Value>{minValue || 0}грн</Value>
      <Value>{maxValue || 0}грн</Value>
    </Flex>
  </Wrapper>
);

export default PriceInterval;
