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

];
//const datas = data.map((each)=>each);
//console.log(datas)


const Products = [];
for (let i = 0; i < data.length; i++)

Products.push(data[i])
//console.log()
console.log( Products )