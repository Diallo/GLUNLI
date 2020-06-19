import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchComponent} from './components/search/search.component';


// import {CanDeactivateGuard} from '../can-deactivate.guard';
// import {CrisisDetailResolverService} from './crisis-detail-resolver.service';

const universitiesRoutes: Routes = [
  {
    path: '',
    component: SearchComponent,
    // children: [
      // {
      //   path: '',
      //   component: CrisisListComponent,
      //   children: [
      //     {
      //       path: ':id',
      //       component: CrisisDetailComponent,
      //       canDeactivate: [CanDeactivateGuard],
      //       resolve: {
      //         crisis: CrisisDetailResolverService
      //       }
      //     },
      //     {
      //       path: '',
      //       component: CrisisCenterHomeComponent
      //     }
      //   ]
      // }
    // ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(universitiesRoutes)

  ],
  exports: [
    RouterModule
  ]
})
export class UniversitiesRoutingModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
