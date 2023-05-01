import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AutoParts from "./pages/AutoParts/AutoParts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { fetchOptions } from "./store/slices/settingsSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOptions());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/">
              <Route index element={<MainPage />} />
              <Route path="/parts" element={<AutoParts />} />
              <Route path="/parts/:mark" element={<AutoParts />} />
              <Route
                path="/parts/:mark/:model/:year/:product/:number/:article"
                element={<AutoParts />}
              />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
