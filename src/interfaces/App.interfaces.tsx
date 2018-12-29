export interface SearchInterface {
  artistName: string;
  artist: ArtistInterface;
  artistEvents: EventsInterface;
  noResult: boolean;
}

export interface ArtistInterface {
  id: number;
  name: string;
  url: string;
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  mbid: string;
  tracker_count: number;
  upcoming_event_count: number;
}

export interface EventInterface {
  offers: Offer[];
  venue: Venue;
  datetime: Date;
  on_sale_datetime: any;
  description: string;
  lineup: string[];
  id: string;
  artist_id: string;
  url: string;
}

export interface Offer {
  type: string;
  url: string;
  status: string;
}

export interface Venue {
  name: string;
  country: string;
  region: string;
  city: string;
  latitude: string;
  longitude: string;
}

export interface EventsInterface extends Array<EventInterface> {}
