import { of } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class ItemsServiceStub {
  all() {return of([])}
  create(item) {return of({})}
  update(item) {return of({})}
  delete(item) {return of({})}
}
