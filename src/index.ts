export interface TOrganizer {
  id: string;
  img: string;
  name: string;
  details: string;
}

export interface TSpeaker {
  id: string;
  img: string;
  name: string;
  details: string;
}

export interface TSchedule {
  id: string;
  day: string;
  date: string;
  registrationDuration: string;
  systemDuration: string;
  lunchDuration: string;
  breakDuration: string;
}

export interface TSponsor {
  id: string;
  img: string;
  name: string;
  details: string;
}

export interface TConference {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  organizers: TOrganizer[];
  speakers: TSpeaker[];
  schedules: TSchedule[];
  sponsors: TSponsor[];
}

