import {
  useGetCitiesByAreaQuery,
  useGetWarehousesByCityQuery,
} from "@/common/api";
import { redoArrayInOptions } from "@/common/helpers";
import { IAreaModel, ICityModel, IWarehouse } from "@/common/types";
import { Select } from "@/ui-liberty/inputs";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useAddressStore } from "../../store";
import { IOrderFormField } from "../../types";
import { Grid, Wrapper } from "./styles";

const Address = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IOrderFormField>();

  const areas = useAddressStore.useAreas();
  const [currentArea, setCurrentArea] = useState<string>("");
  const [currentCity, setCurrentCity] = useState<string>("");

  const { data: cities } = useGetCitiesByAreaQuery(!!currentArea, currentArea);
  const { data: warehouses } = useGetWarehousesByCityQuery(
    !!currentCity,
    currentCity
  );

  const onChangeCity = () => {};

  return (
    <Wrapper>
      <Grid>
        <Select
          options={redoArrayInOptions<IAreaModel>({
            array: areas,
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
          options={redoArrayInOptions<ICityModel>({
            array: cities || [],
            idFieldName: "CityID",
            valueFieldName: "Description",
            labelFieldName: "Description",
          })}
          placeholder="Місто"
          label="Місто"
          registerOptions={register("city", { required: true })}
          error={errors.city}
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
