const btns=[
{
	id: 1,
	name: 'Bag'
},

{
	id: 3,
	name: 'Shoe'
},
{
	id: 4,
	name: 'Makeup'
},
{
	id: 5,
	name: 'Cloth'
},
]

const filters = [...new Set(btns.map((btn)=>
	{return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
	var {name, id} = btn;
	return(
		"<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
		)
}).join('');

const product = [
{
	id: 1,
	image: 'image/gg-1.jpg',
	title: 'Combo Bag',
	price: 2200,
	category: 'Bag'
},
{
	id: 5,
	image: 'image/hh-2.jpg',
	title: 'Cloth 1',
	price: 6000,
	category: 'Cloth'
},
{
	id: 3,
	image: 'image/ee-3.jpg',
	title: 'Special Shoe',
	price: 2200,
	category: 'Shoe'
},
{
	id: 1,
	image: 'image/gg-2.jpg',
	title: 'Normal Bag',
	price: 1500,
},
{
	id: 5,
	image: 'image/hh-3.jpg',
	title: 'Cloth 2',
	price: 6500,
	category: 'Cloth'
},
{
	id: 3,
	image: 'image/ee-2.jpg',
	title: 'Casual Shoe',
	price: 2000,
	category: 'Shoe'
},
{
	id: 4,
	image: 'image/dd-2.jpg',
	title: 'Highlighter',
	price: 650,
	category: 'Makeup'
},


{
	id: 4,
	image: 'image/dd-1.jpg',
	title: 'Foundation',
	price: 858,
	category: 'Makeup'
},
];

const categories = [...new Set(product.map((item)=>
	{return item}))]

const filterItems = (a)=>{
	const flterCategories = categories.filter(item);
	function item(value){
		if(value.id==a){
			return(
				value.id
				)
		}
	}
	displayItem(flterCategories)
}


const displayItem = (items) => {
	document.getElementById('root').innerHTML = items.map((item)=>
	{
		var {image, title, price} = item;
		return(
			`<div class='box'>
			<h3>${title}</h3>
			<div class='img-box'>
			<img class='images' src=${image}></img>
			</div>
			<div class='bottom'>
			<h2>৳ ${price}.00</h2>
			<button>Add to cart</button>
			</div>
			</div>`)
	}).join('');
}
displayItem(categories);