import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {

  enteredSearchValue: string='';
  constructor()
{

}

ngOnInit(): void{

}

@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);
}


}
