import { mainConferenceData, workshopData, registrationData, registrationDataAfternoon } from './event-data';
import { Observable } from 'rxjs/Observable';
import { EventSchedule } from './event-schedule.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EventScheduleService {

	getMainConferenceSchedule(): Observable<EventSchedule[]> {
		return Observable.of(mainConferenceData);
	}

	getWorkshopsSchedule(): Observable<EventSchedule[]> {
		return Observable.of(workshopData);
	}

	getRegistrationSchedule(): Observable<EventSchedule[]> {
		return Observable.of(registrationData);
	}

	getRegistrationAfternoonSchedule(): Observable<EventSchedule[]> {
		return Observable.of(registrationDataAfternoon);
	}

}
