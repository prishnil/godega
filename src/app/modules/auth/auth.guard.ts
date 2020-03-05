import {Injectable} from '@angular/core';
import * as fromRoot from '../../app.reducer';
import {Store} from '@ngrx/store';
import {ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  // re route to login upon false

  constructor(private store: Store<fromRoot.State>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (this.store.select(fromRoot.GET_IS_AUTH)) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }
    return this.store.select(fromRoot.GET_IS_AUTH);
  }

  canLoad(route: Route): Observable<boolean> {
    return this.store.select(fromRoot.GET_IS_AUTH).pipe(take(1));
  }
}

