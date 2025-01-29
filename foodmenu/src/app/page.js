import Image from "next/image";

function Category(){
  return(
    <div className="category">
        <p>salad</p>
      </div>
  )
}

function Foodscontainer(){
  return(
    <div className="foodscontainer">
    <div className="eachFood">
      <div className="nameAndprice">
        <div id="foodName">boortsog</div>
        <div id="foodPrice">500</div>
      </div>
      <div className="foodinfo">hellos</div>
    </div>
    <div className="eachFood">
      <div className="nameAndprice">
        <div id="foodName">boortsog</div>
        <div id="foodPrice">500</div>
      </div>
      <div className="foodinfo">info</div>
    </div>
    <div className="eachFood">
      <div className="nameAndprice">
        <div id="foodName">boortsog</div>
        <div id="foodPrice">500</div>
      </div>
      <div className="foodinfo">helo</div>
    </div>
    </div>
  )
}

function Cards() {
  return (
    <div className="cardcontainer" id="card1">
     <Category></Category>
     <Foodscontainer></Foodscontainer>
    </div>
       
  );
}

function Menu() {
  return (
    <div>
      <h1>pranzo</h1>
      <div id="menucontainer">
        <Cards></Cards>
      </div>
    </div>
  );
}

export default function Home() {
  return <Menu></Menu>;
}
