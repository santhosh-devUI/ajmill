import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
disableCheck=false
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  submit(){
   this.router.navigate(['/dashboard'])
  }
  check(selectedValue:any){
    if(selectedValue.checked==true){
this.disableCheck=true
    }else{
      this.disableCheck=false
    }
  }
}
