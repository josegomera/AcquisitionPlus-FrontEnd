import { Directive, ElementRef, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter, Renderer2, HostListener } from "@angular/core";
import { FormControl } from '@angular/forms';

@Directive({
  selector: "[PersonalIdValidation]"
})
export class PersonalIdValidationDirective implements OnInit{

  constructor(private el: ElementRef) {}

  @Input('control') control: FormControl;
  @HostListener('blur', ['$event.target']) onFocusOut(event) {

    if(!this.validateId(event.value)){
      this.control.setValue(null);
      event.value = '';
      console.log("No VALIDA");
    }else{
      console.log("VALIDA");
    }
  }

  ngOnInit(): void {
  }

  validateId(cedula){
    cedula = cedula.replace(/-/g, '');
    const stringSize = cedula.length;
    let resultNumbers: number[] = [];
    let result: any = 0;
    let pair: any;

    for (let i = 0; i < stringSize - 1 ; ++i) {
        if((i % 2) == 1){
             pair = parseInt(cedula[i]) * 2;
            if(pair > 9){
              pair = pair.toString();
              resultNumbers.push(parseInt(pair[0]) + parseInt(pair[1]));
            }else{
                resultNumbers.push(pair);
            }
        }else{
            resultNumbers.push(parseInt(cedula[i]));
        }
    }

    resultNumbers.forEach(element => {
        result += element;
    });

    result = result * 9;
    result = result.toString();
    result = parseInt(result[result.length - 1]);

    return (result == parseInt(cedula[stringSize - 1])) ? true : false;
  }
}
