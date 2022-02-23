// Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once.
//examples:-
// CurrencyPipe. This pipe is used for formatting currencies. ...
// DatePipe. This pipe is used for the transformation of dates. ...
// DecimalPipe. This pipe is used for transformation of decimal numbers. ...
// JsonPipe. ...
// LowerCasePipe. ...
// UpperCasePipe. ...
// PercentPipe. ...
// SlicePipe.
import { Pipe, PipeTransform } from "@angular/core";
  
@Pipe({
    name: 'custom'
})


export class shortCode implements PipeTransform{
        transform(value: any, limit :number) {
            if (value.length>10)
            {
                return value.substr(0 ,limit);
            }
        }
}