import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { Main } from "./styles";

const Layout: FC<PropsWithChildren> = () => {
  return (
    <Main>
      <Header categories={[]} isDarken={false} />
      <Outlet />
      <Footer />
    </Main>
  );
};

export default Layout;
