import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, PageEvent }   from '@angular/material/paginator';
import { ProductService } from '../../_services';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    
    id: any;
    items: any = [];
    length          : number;
    pageSize        : number;
    pageSizeOptions : number[] = [6];
    pageEvent: PageEvent;
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    ngOnInit() {
        
        this.route.params.subscribe( params => {

            this.id = params
            this.productService.getProducts(this.id.id, 0, 6).subscribe(
                data => {
                    this.items = data['data'];
                    this.length = data['length'];
                }
            );

        } );
        
        
    }

    public async getServerData(event?:PageEvent){
    
        console.log(event);
        var lowValue = event.pageSize * event.pageIndex;
        var highValue = lowValue + event.pageSize ;
        this.route.params.subscribe( params => {

            this.id = params
            this.productService.getProducts(this.id.id, lowValue, highValue).subscribe(
                data => {
                    
                    this.items = data['data'];
                }
            );

        } );
        
        return event;
    }
}
