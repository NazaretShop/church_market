import imageCheck from "@/assets/icons/arrow-down.svg";
import { renderInputError } from "@/common/helpers/renderInputError";
import { useOnClickOutside } from "@/common/hooks";
import { IOption } from "@/common/types";
import {
  ChangeEvent,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Container,
  IndicatorImage,
  Input,
  Label,
  List,
  Message,
  NotFound,
  Row,
  Wrapper,
} from "./styles";
import { ISelectProps } from "./types";

const Select = <T extends object>(props: ISelectProps<T>) => {
  const {
    label,
    options,
    error,
    onChange,
    onChangeFullObject,
    registerOptions,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<HTMLInputElement | undefined>();
  const [filteredOptions, setFilteredOptions] = useState<IOption<T>[]>(options);
  const refWrapper = useRef<HTMLDivElement>(null);
  const selectHintId = useId();

  useLayoutEffect(() => {
    const select = document.getElementById(selectHintId) as HTMLInputElement;
    if (select) {
      setSelect(select);
    }
  }, []);

  useOnClickOutside(refWrapper, () => setIsOpen(false));

  const handlerFilter = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setIsOpen(true);
      const result = options?.filter((option) =>
        option.label
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      );
      setFilteredOptions(result);
    } else {
      setIsOpen(false);
      setFilteredOptions(options);
    }
  };

  const handlerChooseOption = (option: IOption<T>) => {
    if (select) {
      select.value = option.value;
      const value = {
        target: select,
        type: "change",
      } as ChangeEvent<HTMLInputElement>;
      onChange?.(value);
      registerOptions?.onChange(value);
      onChangeFullObject?.(option.fullObject);
      setIsOpen(false);
    }
  };

  const renderOptions = () => {
    return filteredOptions?.map((option) => (
      <Row key={option.id} onClick={() => handlerChooseOption(option)}>
        {option.label}
      </Row>
    ));
  };

  useEffect(() => {
    setFilteredOptions(options);
  }, [JSON.stringify(options)]);

  return (
    <Wrapper ref={refWrapper}>
      {label && <Label>{label}</Label>}
      <Container>
        <Input
          {...rest}
          {...registerOptions}
          isError={!!error}
          id={selectHintId}
          aria-invalid={!!error}
          onChange={(e: any) => {
            handlerFilter(e);
            onChange?.(e);
            registerOptions?.onChange(e);
          }}
        />
        <IndicatorImage
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={imageCheck} alt={"indicator"} />
        </IndicatorImage>
      </Container>
      <List isOpen={isOpen}>
        {!!filteredOptions.length ? (
          renderOptions()
        ) : (
          <NotFound>No data found</NotFound>
        )}
      </List>
      {error && <Message>{renderInputError(error)}</Message>}
    </Wrapper>
  );
};
export default Select;
