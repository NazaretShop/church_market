import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./common/api";
import AppRouter from "./router";
import Theme from "./theme";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <AppRouter />
      </Theme>
    </QueryClientProvider>
  );
};

export default App;
