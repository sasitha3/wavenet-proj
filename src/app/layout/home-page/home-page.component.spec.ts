import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankPageComponent } from './home-page.component';

describe('HomePageComponent', () => {
    let component: BlankPageComponent;
    let fixture: ComponentFixture<BlankPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BlankPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlankPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
