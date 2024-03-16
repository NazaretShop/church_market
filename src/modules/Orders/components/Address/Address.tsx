import {
  useGetAreasQuery,
  useGetCitiesByAreaQuery,
  useGetWarehousesByCityQuery,
} from "@/common/api";
import { redoArrayInOptions } from "@/common/helpers";
import { IAreaModel, ISettlementModel, IWarehouse } from "@/common/types";
import { Select } from "@/ui-liberty/inputs";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IOrderFormField } from "../../types";
import { Grid, Wrapper } from "./styles";

const Address = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IOrderFormField>();

  const [currentArea, setCurrentArea] = useState<string>("");
  const [currentCity, setCurrentCity] = useState<string>("");

  const { data: areas } = useGetAreasQuery();
  const { data: cities } = useGetCitiesByAreaQuery(!!currentArea, currentArea);
  const { data: warehouses } = useGetWarehousesByCityQuery(
    !!currentCity,
    currentCity
  );

  return (
    <Wrapper>
      <Grid>
        <Select
          options={redoArrayInOptions<IAreaModel>({
            array: areas || [],
            idFieldName: "Ref",
            valueFieldName: "Description",
            labelFieldName: "Description",
          })}
          placeholder="Область"
          label="Область"
          registerOptions={register("region", {
            required: true,
          })}
          error={errors.region}
          onChangeFullObject={(value) => {
            setCurrentArea(value.Ref);
          }}
        />
        <Select
          options={redoArrayInOptions<ISettlementModel>({
            array: cities || [],
            idFieldName: "CityID",
            valueFieldName: "Description",
            labelFieldName: "Description",
          })}
          placeholder="Населений пункт"
          label="Населений пункт"
          registerOptions={register("settlement", { required: true })}
          error={errors.settlement}
          onChangeFullObject={(value) => {
            setCurrentCity(value.Ref);
          }}
        />
      </Grid>
      <Select
        options={redoArrayInOptions<IWarehouse>({
          array: warehouses || [],
          idFieldName: "Ref",
          valueFieldName: "Description",
          labelFieldName: "Description",
        })}
        placeholder="Відділення"
        label="Відділення"
        registerOptions={register("department", { required: true })}
        error={errors.department}
      />
    </Wrapper>
  );
};

export default Address;
