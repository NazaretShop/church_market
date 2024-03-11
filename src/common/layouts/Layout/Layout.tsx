import { useGetCategoriesQuery } from "@/common/api/general";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { Main } from "./styles";

const Layout: FC<PropsWithChildren> = () => {
  const { data: categories } = useGetCategoriesQuery();
  console.log("categories :", categories);
  return (
    <Main>
      <Header categories={categories || []} isDarken={false} />
      <Outlet />
      <Footer />
    </Main>
  );
};

export default Layout;
