import { Injectable } from '@angular/core';

interface TokenHolder {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class SessionTokenHolderService {

  public token: TokenHolder;

  constructor() { }

  clear() {
    this.token = undefined;
  }
}
