import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  listFilter='mogli';
  pageTitle = 'Restaurant Managment System';
  imageWidth = 100;
  imageMargin = 3;
  showImage = false;
  restaurants: any[] = [
    {
      'restaurantId': 1,
      'restaurantTitle': 'Mogli',
      'restaurantCity': 'Delhi',
      'restaurantState': 'Delhi',
      'starRating': 3.5,
      'imageUrl': 'https://s-media-cache-ak0.pinimg.com/originals/03/4f/75/034f75c06a06de6635af8f24b5808096.png'
  },
  {
      'restaurantId': 2,
      'restaurantTitle': 'Haldiram',
      'restaurantCity': 'Nagpur',
      'restaurantState': 'Maharashtra',
      'starRating': 2.5,
      'imageUrl': 'http://www.indiagiftcenter.com/haldiramlogo.gif'
  },
   {
      'restaurantId': 3,
      'restaurantTitle': 'Yo China',
      'restaurantCity': 'Noida',
      'restaurantState': 'Uttar Pradesh',
      'starRating': 5,
      'imageUrl': 'http://www.design-worldwide.com/images/clients/big/yochina6big.jpg'
  }
  ];
  constructor() { }

  ngOnInit() {
  }
  toggleImage():void{
    this.showImage = !this.showImage;
  }
}
