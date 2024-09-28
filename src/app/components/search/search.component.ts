import {Component, OnInit} from '@angular/core';
import {FormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public form!: UntypedFormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.createForm()
    this.listenFilter()
  }

  private createForm(): void {
    this.form = new UntypedFormGroup({
      filter: new FormControl(null)
    });
  }

  listenFilter() {
    this.form.get('filter')?.valueChanges.subscribe((filter) => {
      console.log(filter)
    })
  }
}
