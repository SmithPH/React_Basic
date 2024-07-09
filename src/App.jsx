import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import PostCreate from "./pages/PostCreate";
import NoPage from "./pages/NoPage";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* the route below will show in Outlet in Layout.jsx <main> */}
          <Route index element={<Home />} />
          <Route path="create" element={<PostCreate />} />
          <Route path="update" element={<Update />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
