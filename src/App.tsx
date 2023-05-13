import { BrowserRouter } from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { useEffect } from "react";
import { fetchOptions } from "./store/slices/settings/settingsServices";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";

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
          <AppRoutes/>
        </Container>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
