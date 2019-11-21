import {Guest} from './Guest';

export class Codelab{
    constructor(public guests: Array<Guest>){}

    getGuestsComing(){
      return this.guests.filter(guest => guest.coming);
    }
}