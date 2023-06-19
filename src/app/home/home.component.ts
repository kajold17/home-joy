import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation, FreeMode, Autoplay, SwiperOptions } from "swiper";
SwiperCore.use([Pagination, Navigation, Autoplay, FreeMode]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  featuredSection:SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 60,
    loop:true,
  // loopedSlides: 50,
    navigation: true,
    // autoplay: true,
    scrollbar: {
      draggable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      425: {
        slidesPerView: 1.8,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 60
      }
    }
  }

  ngOnInit(): void {
  }



}
