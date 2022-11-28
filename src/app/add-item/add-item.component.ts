import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  image=""
  title=""
  description=""
  rate=""
  sellerName=""
  quantity=""

  readValues=()=> {
    let data:any=
    {
      "image":this.image,
      "title":this.title,
      "description":this.description,
      "rate":this.rate,
      "sellerName":this.sellerName,
      "quantity":this.quantity
    }
    console.log(data)
  }
}
