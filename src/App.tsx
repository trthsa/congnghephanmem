import "./styles.css";
import Nav from "./Nav/Nav";
import Slider from "./Slider/Slider";
import Footer from "./Footer";
import ProductList from "./ProductList/Product";
import { Button } from "@mui/material";
import React from "react";
import Drawer from "./components/Drawer";

export default function App() {
  return (
    <div className="App">
      <header>
        <Nav />

        <Button variant="contained">Contained</Button>
      </header>
      <main style={{ marginTop: 1 + "rem" }}>
        <section
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Slider />
        </section>
        <ProductList />
        <Drawer />
      </main>
      <footer style={{ marginTop: 1 + "rem" }}>
        <Footer />
      </footer>
    </div>
  );
}
