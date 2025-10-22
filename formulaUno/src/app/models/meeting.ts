export interface Meeting {
  meeting_key: number;
  circuit_key: number;
  circuit_short_name: string;
  meeting_code: string;
  location: string;
  country_key: number;
  country_code: string;
  country_name: string;
  meeting_name: string;
  meeting_official_name: string;
  // GMT offset in "HH:MM:SS" format
  gmt_offset: string;
  // ISO 8601 date-time string, e.g. "2023-02-23T07:00:00+00:00"
  date_start: string;
  year: number;
}
 