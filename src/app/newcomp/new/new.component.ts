import { Component, OnInit , Input , EventEmitter ,Output} from '@angular/core';
import { BioDataService } from 'src/app/bio-data.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Input() public parentData:any;
  @Output() public childData= new EventEmitter();

  public data:any ;
  public info:any=[];
  constructor(private biodata:BioDataService) { }

  ngOnInit(): void {
    this.data= this.biodata.howServiceWorks();
    this.info=this.biodata.personalInfo();
  }
  sendingToParent(){
    this.childData.emit("This data is coming from child to parent");
   
  }
}
