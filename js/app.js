(function(){
	var app = angular.module('store', []) ;
	app.controller('StoreController',function(){
		this.products = gems;
	});
	app.controller("PanelController",function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});
	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	var gems = [
		{
			name: 'Diamond',
			price: 200,
			description: 'ghgkrhfjd',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: './images/abc.jpg',
					thumb: './images/xyz.jpg',
				},
				{
					full: './images/abc1.jpg',
					thumb: './images/xyz1.jpg',
				},
			],
			reviews: [
				{
					stars: 5, body: "It is nice", author: "C.V Raman",
				},
				{
					stars: 2, body: "Not good product", author: "Mehak",
				}
			],
		},
		{
			name: 'Ruby',
			price: 4000,
			description: 'ghgHBJHJKHKJH',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: './images/abc1.jpg',
					thumb: './images/xyz1.jpg',
				},
				{
					full: './images/abc.jpg',
					thumb: './images/xyz.jpg',
				},
			],
		}
	];
})();
