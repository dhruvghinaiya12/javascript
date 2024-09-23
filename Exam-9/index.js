const data = async () => {
    let request = await fetch("https://dummyjson.com/products");
    let response = await request.json();
    product(response)
    window.productData = response;
  };
  
  data();
  const product = (data) => {
    document.getElementById("product").innerHTML = "";
  data.products.map((item) => {

    let div= document.createElement("div");
    div.className="main-product";

    let id= document.createElement("h3")
    id.innerHTML=item.id;

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
    let filteredData = window.productData.products.filter((ele) => 
      ele.title.toLowerCase().includes(searchValue)
    );
    product({products:filteredData}); 
  };
  
  document.getElementById("search").addEventListener("click", searching); 
  const sorting = (order) =>{
    if(order == "lth"){
      let sortedData = window.productData.products.sort((a, b) => a.price - b.price);
      product({products:sortedData});
    }
    else{
      let sortedData = window.productData.products.sort((a, b) => b.price - a.price);
      product({products:sortedData});
    }
   
  }
  document.getElementById("sort-select").addEventListener("change", (e) => {
    sorting(e.target.value);
  });


 const filterByCategory = (category) => {
   if(category === "all"){
     product(window.productData);
   }
   else{
     let filteredData = window.productData.products.filter((ele) => ele.category === category);
     product({products:filteredData});
   }
 }
 document.getElementById("filter").addEventListener("change", (e) => {
   filterByCategory(e.target.value);
 });