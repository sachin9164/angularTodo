import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  inputValue:string = ''
  inputRem:string = ''

  inputNote:boolean=true;
  inputImage:boolean=false;
  inputReminder:boolean=false;
  
  notes:any = [{
    id   : 1,
    note :"Thanos",
  },{
    id   : 1,
    note :"Superman",
  }]
  images:any = ["url",]
  reminders:any = ["4:05","6:69"]
  constructor() { }

  ngOnInit() {
  }
  onClickNote(){
    console.log(this.inputValue.length)
    if (this.inputValue.length > 0) {
      this.notes.push({
        id:2,
        note:this.inputValue
      })
      this.inputValue=""
    }
    

  }

  onClickReminder(){
    this.inputReminder =true;
    this.inputNote =false
  }
  onInput(e){
    this.inputValue = e.target.value
    
  }

  ondblClick(){
    //alert("yahoo")
    if(this.inputRem.length > 0){
    this.reminders.push(this.inputRem)
    this.inputRem=""
    }
  }

  onRemainderInput(e){
    this.inputRem = e.target.value
  }
  deleteReminder(reminder){
    //console.log(reminder)
    for (let i = 0; i < this.reminders.length; i++) {
      if (reminder ==this.reminders[i]) {
        this.reminders.splice(i,1)
      } else {
        //console.log("there nothing to delete")
      }
      
    }
  }
  deleteNote(note){
    console.log(note)
    for (let i = 0; i < this.notes.length; i++) {
      //console.log(note)
      //console.log(this.notes[i])
      if (note ==this.notes[i]) {
        this.notes.splice(i,1)
      } else {
       // console.log("the nothing to delete")
      }  
  }
}
}
