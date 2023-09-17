import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  public interval$?:Subscription;

  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy')
    this.interval$?.unsubscribe()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent: ngOnChanges',changes)
  }
  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit')
    this.interval$ = interval(1000).subscribe( value => console.log('Tick', value))
  }
  @Input()
  public price:number = 0;
}
