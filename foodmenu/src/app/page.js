import Image from "next/image";

const data = [
  {},
  {
    categoryTitle: "fruits",
    products: [{ name: "Apple", price: 11 }],
  },

];

function Product(props) {
  return (
    <div className="product-container">
      <p className="product-name">{props.product}</p>
      <p className="product-price"></p>
    </div>
  );
}

function Products() { 
  const datas = data.map((dat)=>dat)
   const productss = datas.products.map((each)=>each.name)
  return (
  <div className="products">
    <Product product = {productss}></Product>
  </div>
);
}

function Category(props) {
  return (
    <div>
      <div className="category">
        <div className="category-title">{props.title.categoryTitle}</div>
        <Products></Products>
      </div>
    </div>
  );
}

function CategoriesContainer() {
  const Title = [];
 
  for (let i = 0; i < data.length; i++)
    Title.push(<Category title={data[i]}></Category>); 

  return (
    <div>
      <div className="categories-container">{Title}</div>
    </div>
  );
}

function Searchbar() {
  return (
    <div>
      <div className="searchbar-container">
        <input type="text" id="text"></input>
        <div id="check-container">
          <input type="checkbox" id="checkbox"></input>
          <p>Only show products in stock</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="main-section">
      <Searchbar></Searchbar>
      <CategoriesContainer></CategoriesContainer>
    </div>
  );
}
