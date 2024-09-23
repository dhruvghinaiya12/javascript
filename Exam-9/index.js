let productData;
const data = async () => {
    let request = await fetch("https://dummyjson.com/products");
    let response = await request.json();
    product(response.products)
    productData = response.products;
  };
  
  data();
  const product = (products) => {
    document.getElementById("product").innerHTML = "";
  products.map((item) => {

    let div= document.createElement("div");
    div.className="main-product";

    let id= document.createElement("h3")
    id.innerHTML=`product id: ${item.id}`;

    let img= document.createElement("img")
    img.src=item.images;

    let title= document.createElement("h3")
    title.innerHTML=item.title;

    let price= document.createElement("h3")
    price.innerHTML=`Price: $${item.price}`;

    let description= document.createElement("p")
    description.innerHTML=item.description;

    let category= document.createElement("h3")
    category.innerHTML=`Category: ${item.category}`;


    let rating= document.createElement("h3")
    if(item.rating>4){
      rating.innerHTML="⭐⭐⭐⭐⭐";

    }
    else if(item.rating>3){
      rating.innerHTML="⭐⭐⭐";

    }
    else{
      rating.innerHTML="⭐⭐";
    }

    div.append(img,id,title,description,price,category,rating);
    document.getElementById("product").append(div);
  })
  };

  const searching = () => {
    let searchValue = document.getElementById("searching").value.toLowerCase(); 
    let filteredData = productData.products.filter((ele) => 
      ele.title.toLowerCase().includes(searchValue)
    );
    product({products:filteredData}); 
  };
  
  document.getElementById("search").addEventListener("click", searching); 
  const sorting = (order) =>{
    if(order == "lth"){
      let sortedData = productData.sort((a, b) => a.price - b.price);
      product(sortedData);
    }
    else{
      let sortedData = productData.sort((a, b) => b.price - a.price);
      product(sortedData);
    }
   
  }
  document.getElementById("sort-select").addEventListener("change", (e) => {
    sorting(e.target.value);
  });


 const filterByCategory = (category) => {
   if(category === "all"){
     product(productData);
   }
   else{
     let filteredData = productData.filter((ele) => ele.category === category);
     product(filteredData);
   }
 }
 document.getElementById("filter").addEventListener("change", (e) => {
   filterByCategory(e.target.value);
 });