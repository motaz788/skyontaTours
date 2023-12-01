import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  slideIndex = 0;
  slides: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  constructor() {}

  ngOnInit(): void {
    this.showSlide(this.slideIndex);
  }

  showSlide(index: number): void {
    if (index < 0) {
      this.slideIndex = this.slides.length - 1;
    } else if (index >= this.slides.length) {
      this.slideIndex = 0;
    }
  }

  nextSlide(): void {
    this.slideIndex++;
    this.showSlide(this.slideIndex);
  }

  prevSlide(): void {
    this.slideIndex--;
    this.showSlide(this.slideIndex);
  }
}
