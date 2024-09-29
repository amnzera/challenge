import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, UntypedFormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() filterEmitter: EventEmitter<string> = new EventEmitter();
  public form!: UntypedFormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createForm();
    this.listenFilter();
  }

  private createForm(): void {
    this.form = new UntypedFormGroup({
      filter: new FormControl(null),
    });
  }

  listenFilter() {
    this.form
      .get('filter')
      ?.valueChanges.pipe(distinctUntilChanged(), debounceTime(1500))
      .subscribe((filter) => {
        this.filterEmitter.emit(filter);
      });
  }
}
