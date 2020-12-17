import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../_services';
import { Product }       from '../../_modal';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];
    id : any;
    product : Product;
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {
        this.sliders.push(
            {
                Url: 'https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg',
                ID: '0',
                Description: 'No Image Found'
            }
        );
    }

    ngOnInit() {

        this.route.params.subscribe( params => {

            this.id = params
            this.productService.getImages(this.id.id).subscribe(
                data => {
                    
                    if(Array.isArray(data)){

                        if(data.length != 0){

                            this.sliders = data;
                        }
                        
                    }
                    
                }
            );

            this.productService.getProduct(this.id.id).subscribe(
                data => {

                    this.product = Object.assign(new Product(), data);
                    
                }
            );

        } );
    }

}
