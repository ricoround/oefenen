import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { Child2Component } from "./child2/child2.component";


const routes: Routes = [
    { path: '', component: ParentComponent },
    { path: 'child', component: ChildComponent },
    { path: 'child2', component: Child2Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
