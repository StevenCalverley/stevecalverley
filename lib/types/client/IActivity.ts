export interface IActivity {
  name: string;
  iconComponent?: string;
}

export interface IActivitiesResponse {
  activities: IActivity[];
}
