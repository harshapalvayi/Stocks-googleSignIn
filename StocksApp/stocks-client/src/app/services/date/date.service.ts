import { Injectable } from '@angular/core';
import {Dates} from '../../models/dates';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDates(): Dates {
    const startDate = moment().startOf('month').format('YYYY-MM-DD');
    const endDate = moment().endOf('month').format('YYYY-MM-DD');
    console.log('startDate',startDate, 'end', endDate);
    return { startDate,  endDate };
  }
}
