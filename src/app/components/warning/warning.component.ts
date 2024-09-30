import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  @Input() label!: string;
  @Input() span!: string;
  @Input() enableBtn: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
