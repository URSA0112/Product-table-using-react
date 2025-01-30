import Image from "next/image";

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

function Product(props) {  


  return (
    <div className="product-container">
      <p className="product-name"></p>
      <p className="product-price"></p>
    </div>
  );
}

function Products(props) {
  //const eachproductname = props.product.map((each)=>{return each.name})
  //const eachproductprice = props.product.map((each)=>{return each.price})

  return (
    <div className="products">
      <Product></Product>
    </div>
  );
}

function Category(props) {
const eachcategory = props.info.map((each)=>{return each.categoryTitle})
//const eachproducts = props.productsdata.map((each)=>{return each.products})
  return (
    <div>
      <div className="category">
        <div className="category-title">{eachcategory}</div>
        <Products></Products>
      </div>
    </div>
  );
}

function CategoriesContainer(props) {
console.log(props)

  return (
    <div>
      <div className="categories-container">
        <Category info= {props.productsdata} ></Category>
      </div>
    </div>
  );
}


export default function Home() {
  const data = [
    {
      categoryTitle: "vegatables",
      products: [{ name: "pomi", price: 21 }],
    },
    {
      categoryTitle: "fruits",
      products: [{ name: "Apple", price: 11 }],
    },
    {
      categoryTitle: "fruits",
      products: [{ name: "Apple", price: 11 }],
    },
  ];
  return (
    <div className="main-section">
      <Searchbar></Searchbar>
      <CategoriesContainer productsdata={data}></CategoriesContainer>
    </div>
  );
}
