import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'game';

// ngOnInit{

// }
count:number=0;
game(event:any){
 
  document.getElementById(event)?.classList.add("open");
this.count ++;
// console.log(this.count);

if(this.count ==1 || this.count ==3 ||this.count ==5 ||this.count ==7 ||this.count ==9 ){
  document.getElementById(event)?.setAttribute('src','../assets/images/cross.png');

}

if(this.count ==2 || this.count ==4 ||this.count ==6 ||this.count ==8 ){
  document.getElementById(event)?.setAttribute('src','../assets/images/zero.jfif');
}


if(this.count ==9 ){
  location.reload();

}

var a= document.getElementById('img1')?.getAttribute('src');
var b= document.getElementById('img2')?.getAttribute('src');
var c= document.getElementById('img3')?.getAttribute('src');
var d= document.getElementById('img4')?.getAttribute('src');
var e= document.getElementById('img5')?.getAttribute('src');
var f= document.getElementById('img6')?.getAttribute('src');
var g= document.getElementById('img7')?.getAttribute('src');
var h= document.getElementById('img8')?.getAttribute('src');
var i= document.getElementById('img9')?.getAttribute('src');

if(this.count >0){
//daigonal
  if(a === '../assets/images/cross.png' && e === '../assets/images/cross.png' && i === '../assets/images/cross.png' || a === '../assets/images/zero.jfif' && e === '../assets/images/zero.jfif' && i === '../assets/images/zero.jfif'){
    document.getElementById('square1')?.classList.add("blink");
    document.getElementById('square5')?.classList.add("blink");
    document.getElementById('square9')?.classList.add("blink");
  }

  if(c === '../assets/images/cross.png' && e === '../assets/images/cross.png' && g === '../assets/images/cross.png' || c === '../assets/images/zero.jfif' && e === '../assets/images/zero.jfif' && g === '../assets/images/zero.jfif'){
    document.getElementById('square3')?.classList.add("blink");
    document.getElementById('square5')?.classList.add("blink");
    document.getElementById('square7')?.classList.add("blink");
  }

  //coloum 
  if(a === '../assets/images/cross.png' && d === '../assets/images/cross.png' && g === '../assets/images/cross.png' || a=== '../assets/images/zero.jfif' && d === '../assets/images/zero.jfif' && g === '../assets/images/zero.jfif'){
    document.getElementById('square1')?.classList.add("blink");
    document.getElementById('square4')?.classList.add("blink");
    document.getElementById('square7')?.classList.add("blink");
  }

  if(b === '../assets/images/cross.png' && e === '../assets/images/cross.png' && h === '../assets/images/cross.png' || b=== '../assets/images/zero.jfif' && e === '../assets/images/zero.jfif' && h === '../assets/images/zero.jfif'){
    document.getElementById('square2')?.classList.add("blink");
    document.getElementById('square5')?.classList.add("blink");
    document.getElementById('square8')?.classList.add("blink");
  }

  if(c === '../assets/images/cross.png' && f === '../assets/images/cross.png' && i === '../assets/images/cross.png' || c=== '../assets/images/zero.jfif' && f === '../assets/images/zero.jfif' && i === '../assets/images/zero.jfif'){
    document.getElementById('square3')?.classList.add("blink");
    document.getElementById('square6')?.classList.add("blink");
    document.getElementById('square9')?.classList.add("blink");
  }

  //row

  if(a === '../assets/images/cross.png' && b === '../assets/images/cross.png' && c=== '../assets/images/cross.png' || a=== '../assets/images/zero.jfif' && b === '../assets/images/zero.jfif' && c === '../assets/images/zero.jfif'){
    document.getElementById('square1')?.classList.add("blink");
    document.getElementById('square2')?.classList.add("blink");
    document.getElementById('square3')?.classList.add("blink");
  }

  if(d === '../assets/images/cross.png' && e === '../assets/images/cross.png' && f === '../assets/images/cross.png' || d=== '../assets/images/zero.jfif' && e === '../assets/images/zero.jfif' && f === '../assets/images/zero.jfif'){
    document.getElementById('square4')?.classList.add("blink");
    document.getElementById('square5')?.classList.add("blink");
    document.getElementById('square6')?.classList.add("blink");
  }

  if(g === '../assets/images/cross.png' && h === '../assets/images/cross.png' && i === '../assets/images/cross.png' || g=== '../assets/images/zero.jfif' && h === '../assets/images/zero.jfif' && i === '../assets/images/zero.jfif'){
    document.getElementById('square7')?.classList.add("blink");
    document.getElementById('square8')?.classList.add("blink");
    document.getElementById('square9')?.classList.add("blink");
  }

}


}

}
