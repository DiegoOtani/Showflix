import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { TvShows } from "./pages/Shows";
import ShowsSearchedPage from "./pages/ShowsSearched";
import AddShowPage from "./pages/AddShow";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TvShows />
      },
      {
        path: "shows/:showName",
        element: <ShowsSearchedPage />
      },
      {
        path: "/show/add",
        element: <AddShowPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])

export default router;