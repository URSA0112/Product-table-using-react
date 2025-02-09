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
    // !!!Product props : 1)props.productname 2)props.productprice
  console.log(props)

  return (
    <div className="product-container">
      <p className="product-name">{props.productname}</p>
      <p className="product-price">$ {props.productprice}</p>
    </div>
  );
}

function Products(props) {
  // Products props : 1)props.products
  //console.log(props.products)

  return (
    <div className="products">
      {props.products.map((each) => (
        <Product productname={each.name} productprice={each.price}></Product>))}
    </div>
  );
}

function Category(props) {
  // Category props : 1) props.key , 2)props.title, 3)props.productList
  // <Products> --> -d props bas uguh heregtei shuu !!! door baiga

  return (
    <div>
      <div className="category">
        <div className="category-title">{props.title}</div>
        <Products products={props.productList}></Products>
      </div>
    </div>
  );
}

function CategoriesContainer(props) {
  // IF used for loop
  // const eachcategory = [];
  //for(let i =0; i<props.data.length;i++){
  // eachcategory.push(<Category each ={props.data[i]}></Category>)
  // console.log(eachcategory)
  //}

  return (
    <div>
      <div className="categories-container">
        {/* used map */}
        {props.data.map((each) => (
          <Category key={each.id} title={each.categoryTitle} productList={each.products} />
        ))}
      </div>
    </div>
  );
}


export default function Home() {
  const data = [
    {
      id: 1,
      categoryTitle: "vegatables",
      products: [{ name: "pomi", price: 21 }],
    },
    {
      id: 2,
      categoryTitle: "fruits",
      products: [{ name: "Apple", price: 11 }],
    },
    {
      id: 3,
      categoryTitle: "burger",
      products: [{ name: "cheese", price: 11 },
        { name: "cheicken", price: 30 }
      ],
    },
 

  ];
  return (
    <div className="main-section">
      <Searchbar></Searchbar>
      <CategoriesContainer data={data}></CategoriesContainer>
    </div>
  );
}
