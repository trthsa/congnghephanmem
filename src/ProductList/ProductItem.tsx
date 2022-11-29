import imgbia from "../img/imgbia.png";

interface IProductItem {
  title: string;
  anh: any;
}

export default function ProductItem({
  ProductParams
}: {
  ProductParams: IProductItem;
}) {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img
        src={ProductParams.anh || imgbia}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{ProductParams.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a className="btn btn-primary" href="/">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
