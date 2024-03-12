import { CloseIcon } from "@/common/components/icons";
import { LINK_TEMPLATES } from "@/common/constants";
import { useDebounce } from "@/common/hooks";
import { Pagination } from "@/common/shared";
import { PriceInterval, SimpleInput } from "@/ui-liberty/inputs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filterGoods } from "./helpers";
import { useSetLimitPerPage } from "./hooks";
import { useMarketStore } from "./store";
import {
  Actions,
  Breadcrumbs,
  Container,
  Content,
  Filter,
  Wrapper,
} from "./styles";
import { IGoods } from "./types";

const Market = () => {
  const goods = [] as IGoods[];
  const push = useNavigate();
  const category = useMarketStore.useCategory();
  const page = useMarketStore.usePage();
  const limit = useMarketStore.useLimit();
  const maxPrice = useMarketStore.useMaxPrice();
  const minPrice = useMarketStore.useMinPrice();
  const search = useMarketStore.useSearch();
  const isInit = useMarketStore.useIsInit();

  const onChangeFilterField = useMarketStore.useOnChangeFilterFieldHandler();
  const [value, setValue] = useState(search);
  const [filteredProducts, setFilteredProducts] = useState(
    filterGoods({ category, search, maxPrice, minPrice }, goods)
  );
  const debouncedValue = useDebounce<string>(value, 1000);

  useSetLimitPerPage((limit) => onChangeFilterField(limit, "limit"));

  // const renderGrid = () => {
  //   return filteredProducts
  //     .slice((page - 1) * limit, page * limit)
  //     .map((item, id) => <ProductCard product={item.product} key={id} />);
  // };

  useEffect(() => {
    if (isInit) {
      push(LINK_TEMPLATES.PRODUCTS({ search: value, category, page }));
    }
  }, [debouncedValue]);

  useEffect(() => {
    setFilteredProducts(
      filterGoods({ category, search, maxPrice, minPrice }, goods)
    );
  }, [category, page, search, maxPrice, minPrice, limit]);

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
            {!!category && (
              <Breadcrumbs
                onClick={() => {
                  push(LINK_TEMPLATES.PRODUCTS({ search: value, page }));
                }}
              >
                <button>
                  <CloseIcon />
                </button>
                <span>{category}</span>
              </Breadcrumbs>
            )}
          </Actions>
          {isInit && (
            <>
              {/* {!!filteredProducts.length ? (
                <Grid>{renderGrid()}</Grid>
              ) : (
                <NotFound>
                  На жаль, за вашим запитом не знайдено жодної продукції. Будь
                  ласка, спробуйте змінити свій пошуковий запит або перевірте,
                  чи правильно введені дані.
                </NotFound>
              )} */}
              <Pagination
                currentPage={page}
                onPageChange={(page) => {
                  push(LINK_TEMPLATES.PRODUCTS({ search, category, page }));
                }}
                pageSize={limit}
                totalCount={filteredProducts.length}
              />
            </>
          )}
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Market;
