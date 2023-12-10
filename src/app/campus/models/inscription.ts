import { User } from "./user";
import { Subject } from "./subject";

export interface Inscription {
  id: number;
  subject: Subject;
  teacher: User;
  pupil: User;
  note: number;
  class_day: string;
  class_hour: string;
}
