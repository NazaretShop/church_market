import { Input, TextArea } from "@/ui-liberty/inputs";
import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IOrderFormField } from "../../types";
import Address from "../Address/Address";
import { applyPhoneMask } from "./helpers";
import { Container, Content, Line, Title, Wrapper } from "./styles";

const Form = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IOrderFormField>();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let cleaned = e.target.value.replace(/[^-+ ()\d]/g, "");
    const appliedValue = applyPhoneMask("380", cleaned, ` (##) ###-##-##`);
    setPhoneNumber(appliedValue);
  };

  return (
    <Wrapper>
      <Content>
        <Title>Особисті дані</Title>
        <Line />
        <Container>
          <Input
            placeholder="Прізвище"
            label="Прізвище"
            {...register("lastName", { required: true })}
            error={errors.lastName}
          />
          <Input
            placeholder="Ім'я"
            label="Ім'я"
            {...register("firstName", { required: true })}
            error={errors.firstName}
          />
          <Input
            value={phoneNumber}
            placeholder="+380 (XX) XXX-XX-XX"
            label="Номер телефону"
            {...register("phoneNumber", {
              required: true,
              onChange(event) {
                handlePhoneChange(event);
              },
            })}
            error={errors.phoneNumber}
          />
          <Input
            placeholder="Email"
            label="Emali"
            type="email"
            {...register("email", {
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Вказаний email не коректний",
              },
            })}
          />
        </Container>
      </Content>
      <Content>
        <Title>Адрес замовлення</Title>
        <Line />
        <Address />
      </Content>
      <Content>
        <Title>Коментар до замовлення</Title>
        <Line />
        <TextArea
          placeholder="Коментар"
          customHeight={120}
          unValidate
          {...register("comment")}
        />
      </Content>
    </Wrapper>
  );
};

export default Form;
