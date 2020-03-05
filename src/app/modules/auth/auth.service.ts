import { AuthData } from './models/auth-data.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UIService } from '../shared/services/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import * as UI from '../shared/reducers/ui.actions';
import * as Auth from './reducer/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UIService,
    private db: AngularFirestore,
    private store: Store<{ui: fromRoot.State}>) {}

  public initAuthListener(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
        this.router.navigate(['/dashboard']);
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated());
        this.router.navigate(['/']);
      }
    });
  }

  public registerUser(authData: AuthData): void {
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(
      () => {
        this.store.dispatch(new UI.StopLoading());
      }
    ).catch(error => {
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(error, null, 3000);
    });
  }

  public login(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
      () => {
        this.store.dispatch(new UI.StopLoading());
      }
    ).catch(error => {
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(error, null, 3000);
    });
  }

  /* Merge together fetch upcoming and past bookings */

  public logout(): void {
    this.afAuth.auth.signOut();
  }
}
