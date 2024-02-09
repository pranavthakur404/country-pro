import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, Error, CountryDetails } from "./pages";
import RootLayout from "./root/RootLayout";
import { loader as fetchAll } from "./pages/Home";
import { loader as fetchSingleCountry } from "./pages/CountryDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index loader={fetchAll} element={<Home />} />
      <Route
        path="/details/:name"
        loader={fetchSingleCountry}
        element={<CountryDetails />}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
