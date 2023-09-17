import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean = false
  public currentPrice:number = 10;

  constructor(){}

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes)
  }

  //Se utilizar usualmente para la carga inicial de peticion HTTP
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  increasePrice(){
    this.currentPrice++;
  }

}
