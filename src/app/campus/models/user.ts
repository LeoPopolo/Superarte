export interface User {
  id: number;
  name: string;
  last_name: string;
  username: string;
  type: UserType;
  gender: UserGender;
  birthdate: Date;
  image_path: string;
  contact_information: ContactInformation;
}

export interface UserRequest {
  name: string;
  last_name: string;
  username: string;
  password: string;
  type: UserType;
  gender: UserGender;
  birthdate: Date;
  image_path: string;
  contact_information: ContactInformation;
}

export enum UserType {
	pupil = 'pupil',
  teacher = 'teacher',
  admin = 'admin'
}

export enum UserGender {
  male = 'male',
  female = 'female',
}

export interface ContactInformation {
  address: string;
  email: string;
  phone_number: string;
}
