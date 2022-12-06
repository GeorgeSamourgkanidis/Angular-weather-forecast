import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const enum ROUTES_STRINGS {
  CURRENT = 'current',
  FORECAST5 = 'forecast5'
}

const routes: Routes = [
  // {
  //   path: `${ROUTES_STRINGS.CURRENT}`,
  //   component: QuestionnaireToAnswerComponent,
  // },
  // {
  //   path: `${ROUTES_STRINGS.FORECAST5}`,
  //   component: QuestionnaireToAnswerComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
