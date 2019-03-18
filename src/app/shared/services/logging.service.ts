import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() {}

  log(statement: string, args = null) {
    console.log(statement, args);
  }

}
