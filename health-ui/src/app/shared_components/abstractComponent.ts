import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

export abstract class AbstractComponent implements OnInit, OnDestroy {
    subscriptions : Subscription = new Subscription();

    protected handleRequest(operation: Observable<any>, responseHandler, errorHandler?) {
        if(!errorHandler) {
            errorHandler = error => console.log("Error handlingRequest ", error);
        }

        this.subscriptions.add(
            operation.subscribe(responseHandler, errorHandler)
        );
    }

    ngOnInit() {}

    ngOnDestroy() {
        if(this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    }
}