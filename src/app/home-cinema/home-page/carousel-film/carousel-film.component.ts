import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-film',
  templateUrl: './carousel-film.component.html',
  styleUrls: ['./carousel-film.component.scss']
})
export class CarouselFilmComponent implements OnInit {
  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
  carouselOptions = {
    margin:25,
    loop:true,
    dots:false,
    nav: false,
    navText: ["<div class='prev-click'><i class='fa fa-angle-left'></i></div>", "<div class='next-click'><i class='fa fa-angle-right'></i></div>"],
    animateOut: 'fadeOut',
    autoplay:true,
    autoplaySpeed:5000,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop:true,
      },
      600: {
        items: 1,
        nav: false,
        loop:true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      },
      1500: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  }
 
  images = [
    {
      image: "/assets/images/slider/slide1.jpg"
    },
    {
      image: "/assets/images/slider/slide2.jpg"
    },
    {
      image: "/assets/images/slider/slide3.jpg"
    },
    {
      image: "/assets/images/slider/slide5.jpg"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
