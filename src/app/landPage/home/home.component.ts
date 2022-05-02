import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    numbers=[
      {
        id:1,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'Articulos para WAX'
      },
      {
        id:2,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'INNALADORES'
      },
      {
        id:3,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'BLUNT'
      },
      {
        id:4,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'BLONGS ACRILICO'
      },
      {
        id:5,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'BONGS DE VIDRIO'
      },{
        id:6,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'BONGS DELUXE'
      },
      {
        id:7,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'CANALA'
      },
      {
        id:8,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'CENICEROS'
      },
      {
        id:9,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'CHAROLA'
      },
      {
        id:10,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'ENCENDEDORE/ SOPLETES'
      },{
        id:11,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'GRINGER'
      },
      {
        id:12,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'INCIENCIOS'
      },
      {
        id:13,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'LOCIONES'
      },
      {
        id:14,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'MASCARAS DE GAS'
      },
      {
        id:15,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'PIPAS'
      },
      {
        id:16,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'PRODUCTIS ESOTERICOS'
      },{
        id:17,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'ROLADORAS'
      },
      {
        id:18,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'SHISHAS'
      },
      {
        id:19,
        image:'https://www.halesowennews.co.uk/resources/images/3549621?type=responsive-gallery-fullscreen',
        description:'VAPE DESCHABBLES'
      },
    ]
    msg =''
  constructor() { 
    
  }
  clickEvent(id){
    console.log('movida',id);
  }

  ngOnInit(): void {
    
  }

}
