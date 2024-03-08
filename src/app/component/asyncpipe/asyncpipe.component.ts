import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrl: './asyncpipe.component.css'
})
export class AsyncpipeComponent
{
  /*
  observable=new Observable ((data)=>
  {

    data.next(1);
    data.next(2);
    data.next(3);

  }).subscribe(e=>console.log('observable'+e));
 --------------------------------------------------------
  asyncPipe=new Observable( (observe)=>
 {
  observe.next("hi");
  observe.next("hello");
  observe.next("hell");
 });
  */

 asyncPipe=new Observable( (observ=>
 {

  let i=0;
  setInterval( ()=>{})
  
 }));

 booleanOb=new Observable( (observ=>
  {
    setTimeout( ()=>{observ.next("true");},5000)
  }))
 
}
