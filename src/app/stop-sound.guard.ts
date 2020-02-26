import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SynthesisComponent } from './student-components/synthesis/synthesis.component';

@Injectable({
  providedIn: 'root'
})
export class StopSoundGuard implements CanDeactivate<SynthesisComponent> {
  
  canDeactivate(
    synthesis: SynthesisComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(synthesis.audioPlaying) {
      synthesis.a.pause();
      synthesis.audioPlaying = false;
    }
    return true;
  }

}