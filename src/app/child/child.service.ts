import { Injectable } from "@angular/core";

@Injectable()

export class ChildService {
    invoerRij: string[] = ['Test'];

    onChildInvoerCreated(name: string) {
        this.invoerRij.push(name);
    }

}