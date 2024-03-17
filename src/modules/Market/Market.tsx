/* eslint-disable react-hooks/exhaustive-deps */
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/common/api/general";
import { LoaderProductCard, ProductCard } from "@/common/components/cards";
import { CloseIcon } from "@/common/components/icons";
import { LINK_TEMPLATES } from "@/common/constants";
import { useDebounce } from "@/common/hooks";
import { Pagination } from "@/common/shared";
import { PriceInterval, SimpleInput } from "@/ui-liberty/inputs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notFoundText } from "./data";
import { useSetLimitPerPage } from "./hooks";
import { useMarketStore, useMarketSync } from "./store";
import {
  Actions,
  Breadcrumbs,
  Container,
  Content,
  Filter,
  Grid,
  NotFound,
  Wrapper,
} from "./styles";

const Market = () => {
  const push = useNavigate();

  const category = useMarketStore.useCategory();
  const page = useMarketStore.usePage();
  const limit = useMarketStore.useLimit();
  const maxPrice = useMarketStore.useMaxPrice();
  const minPrice = useMarketStore.useMinPrice();
  const search = useMarketStore.useSearch();
  const isInit = useMarketStore.useIsInit();

  useMarketSync();

  const { data: goods, isLoading } = useGetProductsQuery({
    page,
    limit,
    search,
    category,
  });

  const { data: categories } = useGetCategoriesQuery();

  const onChangeFilterField = useMarketStore.useOnChangeFilterFieldHandler();
  const [value, setValue] = useState(search);
  const chooseCategory = categories?.find((item) => +item.id === +category)
    ?.title.rendered;
  const debouncedValue = useDebounce<string>(value, 1000);

  useSetLimitPerPage((limit) => onChangeFilterField(limit, "limit"));

  const renderGrid = () => {
    return goods?.items?.map((item, id) => (
      <ProductCard product={item} key={id} />
    ));
  };

  useEffect(() => {
    if (isInit) {
      push(LINK_TEMPLATES.PRODUCTS({ search: value, category, page }));
    }
  }, [debouncedValue]);

  useEffect(() => {
    setValue(search);
  }, [isInit]);

  return (
    <Wrapper>
      <Content>
        <Container>
          <Actions>
            <Filter>
              <SimpleInput
                placeholder="Пошук..."
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <PriceInterval
                maxValue={String(maxPrice || "")}
                minValue={String(minPrice || "")}
                onChangeMaxValue={(e) => onChangeFilterField(e, "maxPrice")}
                onChangeMinValue={(e) => onChangeFilterField(e, "minPrice")}
              />
            </Filter>
            {!!chooseCategory && (
              <Breadcrumbs
                onClick={() => {
                  push(LINK_TEMPLATES.PRODUCTS({ search: value, page }));
                }}
              >
                <button>
                  <CloseIcon />
                </button>
                <span>{chooseCategory}</span>
              </Breadcrumbs>
            )}
          </Actions>
          {(goods?.items?.length || isLoading) && (
            <Grid>
              {isLoading
                ? [...Array(limit)].map((_, id) => (
                    <LoaderProductCard key={id} />
                  ))
                : renderGrid()}
            </Grid>
          )}
          {!goods?.items?.length && !isLoading && (
            <NotFound>{notFoundText}</NotFound>
          )}
          <Pagination
            currentPage={page}
            onPageChange={(page) => {
              push(LINK_TEMPLATES.PRODUCTS({ search, category, page }));
            }}
            pageSize={limit}
            totalCount={goods?.total || 0}
          />
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Market;
