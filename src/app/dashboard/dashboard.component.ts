import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
rawData=[
  {name:'jagadheesh',address:'karimnagar',mobile:9876543210},
  {name:'swamy',address:'karimnagar',mobile:9876543210},
  {name:'santhosh',address:'karimnagar',mobile:9876543210},
  {name:'srikanth', address:'kothapally',mobile:9876543210},
  {name:'charanvas', address:'peddapalli',mobile:9876543210}
]
  constructor() { }

  ngOnInit(): void {
  }

}
