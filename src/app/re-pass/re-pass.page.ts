import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-re-pass',
  templateUrl: './re-pass.page.html',
  styleUrls: ['./re-pass.page.scss'],
})
export class RePassPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    usuario: "",
    password: ""
  }

}
