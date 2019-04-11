import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input('name') name: string;
  
  ngOnInit() {
  }
  

  @Output() clicked= new EventEmitter <any>();

  onClick(){
    this.clicked.emit();
  }

}
