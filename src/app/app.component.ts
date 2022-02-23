import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BioDataService } from './bio-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string='angboot';
  owner='Sachin';
  learn='interpolation';
  video:string='i am learning interpolation';
   audio:string='and practicing it';
   end:string='thank you!';
   company:string='Bravura';
   func():string{
     return this.company;
   }
   checkpoint:string="hello";
   isHidden:boolean=false;
   isDisable:boolean=false;
   myValue:string='';
   myFunc():string{
     return this.myValue="Event handled";
   }
   myFunc1(event:any)
   {
     console.log(event);
   }
   isActive:boolean=true;
   cssClasses:string='buttonBackground colorFont';
   cssClasses2:boolean=true;
   myStyle:string="bold";
   isStyle:boolean=true;
   email='sachinpratapsingh889@gmail.com'
   getEmail(){
     console.log(this.email);
   }
   cars={
    brand :"BMW",
    model: 'S class Amt benze',
    buydate: new Date(2022, 2 ,12)
  }  
  multiClasses ={
    'bolding':true,
    'styling':true,
    'colorFont2': true,
    'buttonBackground':true
  }
  ownerName='sachin';
  multistyles ={
    'font-style' : 'italic',
    'font-weight': 'bold'
  }
  favColor= 'red';
  dress=['Formals' , 'pant' , 'blackshoes' , 'tie'];

public fullName='data as input from parent to child';
public childmsg:any;
public data2:any;
constructor(private biodata2:BioDataService){}
ngOnInit():void
{
  this.data2=this.biodata2.howServiceWorks();
}

}
