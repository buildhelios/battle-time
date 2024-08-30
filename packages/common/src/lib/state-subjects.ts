// BehaviorSubject can be used to store global state that can be observed through out an app.
import { BehaviorSubject } from 'rxjs';

export const tipOfTheDaySubject=new BehaviorSubject<string>('Look both ways before crossing the street');
