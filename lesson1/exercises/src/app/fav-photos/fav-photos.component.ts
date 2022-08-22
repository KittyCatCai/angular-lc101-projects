import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Relaxing Nature Pics';
  image1 = 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg';
  image2 = 'https://i.pinimg.com/originals/58/73/9a/58739ac63a86a89c81d5ae3f091ae3db.png';
  image3 = 'https://www.treehugger.com/thmb/QolJfOYFmxwIH6Sxv5SBqY8Kq-M=/1885x1414/smart/filters:no_upscale()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg';

  constructor() { }

  ngOnInit() {
  }

}
