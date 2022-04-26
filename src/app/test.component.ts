import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<h2>Test page</h2><button routerLink="/test2">Go to test2</button>'
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
