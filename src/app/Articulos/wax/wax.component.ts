import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wax',
  templateUrl: './wax.component.html',
  styleUrls: ['./wax.component.css']
})
export class WaxComponent implements OnInit {
  numbers = [
    {
     id:1,
     image:'data:image/jpeg;base64,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',
     pricerMass:130,
     pricePice:150
    },
    {
     id:2,
     image:'data:image/jpeg;base64,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',
     pricerMass:130,
     pricePice:150
    }
    ,{
     id:3,
     image:'data:image/jpeg;base64,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',
     pricerMass:130,
     pricePice:150
    },{
     id:4,
     image:'data:image/jpeg;base64,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',
     pricerMass:130,
     pricePice:150
    },{
     id:5,
     image:'data:image/jpeg;base64,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',
     pricerMass:130,
     pricePice:150
    },{
     id:6,
     image:'data:image/jpeg;base64,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',
     pricerMass:130,
     pricePice:150
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
