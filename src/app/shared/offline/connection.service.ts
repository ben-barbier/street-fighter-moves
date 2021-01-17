import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ConnectionService {
    // TODO: SSR prblem with 'navigator'
    // public isOnline$ = new BehaviorSubject<boolean>(navigator.onLine);
    //
    // constructor() {
    //     window.addEventListener('offline', () => this.isOnline$.next(navigator.onLine));
    //     window.addEventListener('online', () => this.isOnline$.next(navigator.onLine));
    // }
}
