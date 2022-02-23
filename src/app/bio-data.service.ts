// services in Angular let you define code or functionalities that are then accessible and reusable in many other components in your Angular project. Services help you with the abstraction of logic and data that is hosted independently but can be shared across other components.
//steps:
//ng generate service service-name this will generate 2 files ... service.ts, service.spec.ts file
//define functions which you want to inject in different components in service.ts file
//register about service in app.module.ts. Provide className of service in provider array and also import it on top.
//go to component.ts where you want to use service. take the class in construtor to use its methods
//write how to accept that service code(eg in a variable first define it than take returned value in it) in ngOnInit();
//use accepted result stored variable in that component.html file.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BioDataService {
  
  constructor() {}

    howServiceWorks(){
      return "services insepection";
     }
    
     personalInfo(){
       return [ {'name':'sachin' , 'age':21 ,'profile':'trainee'},
       {'name':'pratap', 'age':22,'profile':'devoloper'},
       {'name':'singh','age':23,'profile':'tester'}]
     }
      
     
}
