import ProductItem from "./ProductItem";
import logosh from "../img/biaheniken.png";
import logosb from "../img/biabira.png";
const productList = [
  { title: "HungLe1", anh: logosh },
  { title: "HungLe2", anh: logosb }
];
export default function ProductList() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {productList.map((i) => {
        return <ProductItem ProductParams={{ title: i.title, anh: i.anh }} />;
      })}
    </div>
  );
}
