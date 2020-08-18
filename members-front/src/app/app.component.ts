import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  selected_member = {id: 0, name: '', surname: ''};

  members = [
    {name:'Member 01',id:'01',surname:'ciclano', photo:'www.minhaapp.com/photo1'},
    {name:'Member 02',id:'02',surname:'beltrano', photo:'www.minhaapp.com/photo2'},
    {name:'Member 03',id:'03',surname:'fulano', photo:'www.minhaapp.com/photo3'},
  ];

  constructor(private api:ApiService){
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("aconteceu um erro", error.message);
      }
    );
  };
  memberClicked = (member) => {
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    )
  };
}
