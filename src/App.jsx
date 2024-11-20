import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import "./styles.css";
import Hjem from "./pages/Hjem";
import Layout from "./layout/Layout";
import Om from "./pages/Om";
import Kontakt from "./pages/Kontakt";
import HarViRingt from "./pages/HarViRingt";
import Personvern from "./pages/Personvern";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/ScrollToTop";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["marker"]}>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Spurven</title>
                  </Helmet>
                  <Hjem />
                </>
              }
            />
            <Route
              path="/om-oss"
              element={
                <>
                  <Helmet>
                    <title>Om oss | Spurven</title>
                  </Helmet>
                  <Om />
                </>
              }
            />
            <Route
              path="/kontakt"
              element={
                <>
                  <Helmet>
                    <title>Kontakt | Spurven</title>
                  </Helmet>
                  <Kontakt />
                </>
              }
            />
            <Route
              path="/har-vi-ringt-deg"
              element={
                <>
                  <Helmet>
                    <title>Har vi ringt deg? | Spurven</title>
                  </Helmet>
                  <HarViRingt />
                </>
              }
            />
            <Route
              path="/personvern"
              element={
                <>
                  <Helmet>
                    <title>Personvern | Spurven</title>
                  </Helmet>
                  <Personvern />
                </>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </LoadScript>
  );
}

export default App;
