import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { TvShows } from "./pages/Shows";
import ShowsSearchedPage from "./pages/ShowsSearched";

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
      }
    ]
  }
])

export default router;