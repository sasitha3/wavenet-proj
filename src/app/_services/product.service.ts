import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) { }

    getProducts(categoryId, low, high) {

        return new Observable(observer => {

            this.http.get('./assets/sample-be/product.json').subscribe(data => {
                
                if(Array.isArray(data)){
                        
                    var fildata = data.filter(
                                 res => res.CategoryID == categoryId);
                    
                    for (let index = 0; index < fildata.length; index++) {

                        this.getImages(fildata[index].ID).subscribe(
                            params => {
                                
                                if(Array.isArray(params)){

                                    if(params.length != 0){

                                        fildata[index].Image = params[0].Url;                                     
                                    }
                                    
                                    
                                    
                                }
                            }
                        );
                    }
                    const productData = {
                        data: fildata.slice(low, high),
                        length : fildata.length
                    }
                    observer.next(productData);
                 }
                
            })
            
         });
    }

    getProduct(productId) {

        return new Observable(observer => {

            this.http.get('./assets/sample-be/product.json').subscribe(data => {
                
                if(Array.isArray(data)){
                        
                    var fildata = data.filter(
                                 res => res.ID == productId);
                    observer.next(fildata[0]);
                    
                 }
                
            })
            
         });
    }

    getImages(productId) {
        
        return new Observable(observer => {

            this.http.get('./assets/sample-be/image.json').subscribe(data => {
                
                if(Array.isArray(data)){
                        
                    var fildata = data.filter(
                                 res => res.productID == productId);
                    observer.next(fildata);
                    
                 }
                
            })
            
         });
    }

}