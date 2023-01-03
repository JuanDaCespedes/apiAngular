import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-data-component',
  templateUrl: './input-data-component.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class InputDataComponentComponent implements OnInit {
  @Input() ph?: string;
    @Output() inputData = new EventEmitter<string>();
    timeout: any = null;
    @Input() typeInput?: string;
    @Input() readonly?: boolean;
    @Input() val: any;

  constructor() { }

  ngOnInit(): void {
  }

  captureValue(event: any): void {
    clearTimeout(this.timeout);
    const $this = this;
    this.timeout = setTimeout(function () {
      if(event.keyCode != 13){
        $this.val = event.target.value;
        $this.updateValue();
      }
    }, 1000)
  }

  updateValue(): void {
    this.inputData.emit(this.val);
  }
}
