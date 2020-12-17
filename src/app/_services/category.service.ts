import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    constructor(private http: HttpClient) { }

    getCategories() {

        return this.http.get('./assets/sample-be/category.json');
    }

}