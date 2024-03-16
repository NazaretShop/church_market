export interface IBaseModel {
  id: number;
  title: string;
}

export interface IParameterModel {
  name: string;
  value: string;
}
export interface IProductModel {
  id: string;
  title: string;
  files: IFileUploadedModel[];
  amount: number;
  description: string;
  parameters: IParameterModel[];
  price: number;
  category: string;
}

export interface IFileUploadedModelSecond {
  guid: string;
  ID: string | number;
  post_name: string;
  post_mime_type: string | null;
}

export interface IProductModelSecond {
  id: string;
  product_name: string;
  product_amount: string;
  product_images: IFileUploadedModelSecond[];
  product_description: string;
  product_parameters: string[];
  product_price: number;
  product_category: { post_title: string }[];
}

export interface IBannerModel {
  id: string;
  banner_description: string;
  banner_image: {
    guid: string;
  };
  banner_name: string;
}

export interface IFileUploadedModel {
  url: string;
  id: string | number;
  name: string;
  format: string | null;
}

export interface ISliderModel extends IBaseModel {
  description: string;
  image: string;
}

export interface IDetailProductModel extends IBaseModel {
  image: string;
}

export interface IGoodsIBaskedModel {
  name: string;
  id: string;
  count: number;
  price: number;
  image: string;
  total: number;
}

export interface IOrderModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  region: string;
  settlement: string;
  department: string;
  comment: string;
  goods: IGoodsIBaskedModel[];
  price: number;
  count: number;
  createdAt: number;
  status: "new";
}

export interface ICategoryModel {
  id: string;
  category: {
    id: string;
    name: string;
  };
}

export interface ICategoryModelSecond {
  id: string;
  title: { rendered: string };
}

export interface IAreaModel {
  Ref: string;
  AreasCenter: string;
  DescriptionRu: string;
  Description: string;
}

export interface ISettlementModel {
  Description: string;
  DescriptionRu: string;
  Ref: string;
  Delivery1: string;
  Delivery2: string;
  Delivery3: string;
  Delivery4: string;
  Delivery5: string;
  Delivery6: string;
  Delivery7: string;
  Area: string;
  SettlementType: string;
  IsBranch: string;
  PreventEntryNewStreetsUser: string;
  CityID: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  SpecialCashCheck: number;
  AreaDescription: string;
  AreaDescriptionRu: string;
}

export interface IWarehouse {
  SiteKey: string;
  Description: string;
  DescriptionRu: string;
  ShortAddress: string;
  ShortAddressRu: string;
  Phone: string;
  TypeOfWarehouse: string;
  Ref: string;
  Number: string;
  CityRef: string;
  CityDescription: string;
  CityDescriptionRu: string;
  SettlementRef: string;
  SettlementDescription: string;
  SettlementAreaDescription: string;
  SettlementRegionsDescription: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
}
