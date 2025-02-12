import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { TvShows } from "./pages/Shows";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TvShows />
      },
    ]
  }
])

export default router;