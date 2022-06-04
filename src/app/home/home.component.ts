import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mldata:any = [];

  constructor(private showservice:ShowService) { }

  ngOnInit(): void {

    this.mldata = this.showservice.getMldata();


  }



}
