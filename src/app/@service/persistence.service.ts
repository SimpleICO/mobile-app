import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor(private logger: LoggerService) {
    this.logger.info('[PersistenceService] initialized.');
  }

  public load() {
    this.logger.info('[PersistenceService] loaded.');
  }

}
