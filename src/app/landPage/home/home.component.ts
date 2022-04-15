import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    numbers=[
      {
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'Some quick example text to build on the card title and make up the bulk of the cards content.'
      },
      {
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'Some quick example text to build on the card title and make up the bulk of the cards content.'
      },
      {
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'Some quick example text to build on the card title and make up the bulk of the cards content.'
      },
      {
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'Some quick example text to build on the card title and make up the bulk of the cards content.'
      },
      {
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'Some quick example text to build on the card title and make up the bulk of the cards content.'
      }
    ]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
