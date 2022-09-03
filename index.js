const loadAllProdect = async()=>{
    const res =await fetch("https://fakestoreapi.com/products");
    const data =await res.json();
    return data ;
}
const setAllmanu =async()=>{
 const data =await loadAllProdect();
 const menu =document.getElementById('all-menu');
 const removeArray =[]
 for(const product of data){
    // console.log(product.category)
   if(removeArray.indexOf(product.category)== -1){
    removeArray.push(product.category);
    const li =document.createElement('li');
    li.innerHTML =`<li>${product.category}</li>`
    menu.appendChild(li)
   }

 }

}
setAllmanu()
// loadAllProdect()

const searchField =document.getElementById('search-field');
searchField.addEventListener('keypress',async(event)=>{
    if (event.key === 'Enter'){
        const searchValue = searchField.value;
        // console.log(searchValue)
        const allPrice = await loadAllProdect();
        // console.log(allPrice)
        const foundProduct = allPrice.filter(product=>product.category.includes(searchValue))
        const productContainer =document.getElementById('prodect-container');
        foundProduct.forEach(product => {
        const {category,image,title}=product
        const div =document.createElement('div');
        div.innerHTML=`
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src=${image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${category}</h2>
                <p>${title.length> 20 ? title.slice(0,20) + '...' : title}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">show detail</button>
                </div>
            </div>
        </div>
        `
        productContainer.appendChild(div)
            
        });
    }
})