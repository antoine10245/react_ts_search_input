import * as React from "react";
import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

const Wrapper = styled.div``;
const Artist = styled.div``;
const Events = styled.div``;

const API = "https://rest.bandsintown.com/artists/";
const APP_ID = "123123";

interface SearchInterface {
  artistSearch: string;
  artist: ArtistInterface;
  events: EventInterface[];
}

interface ArtistInterface {
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

interface Offer {
  type: string;
  url: string;
  status: string;
}

interface Venue {
  name: string;
  country: string;
  region: string;
  city: string;
  latitude: string;
  longitude: string;
}

interface EventInterface {
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

class Search extends React.Component<object, SearchInterface> {
  state: SearchInterface = {
    artistSearch: "",
    artist: {} as ArtistInterface,
    events: []
  };

  handleInputChange = (event: any) => {
    this.setState({ artistSearch: event.target.value }, this.getArtist);
  };

  getArtist = () => {
    if (this.state.artistSearch) {
      fetch(`${API}${this.state.artistSearch}/?app_id=${APP_ID}`)
        .then(response => response.json())
        .then(Data => this.setState({ artist: Data }, this.getEvents))
        .catch(error => error);
    }
  };

  getEvents = () => {
    fetch(`${API}${this.state.artistSearch}/events/?app_id=${APP_ID}`)
      .then(response => response.json())
      .then(Data => this.setState({ events: Data }))
      .catch(error => error);
  };

  render() {
    return (
      <Wrapper>
        <DebounceInput
          onChange={this.handleInputChange}
          minLength={2}
          debounceTimeout={300}
          value={this.state.artistSearch}
        />

        <Artist>
          <h1>{this.state.artist.name}</h1>
          <img src={this.state.artist.image_url} />
          <p>{this.state.artist.facebook_page_url}</p>
        </Artist>

        <Events>
          {this.state.events.map((event, i) => {
            return (
              <div key={i}>
                <p>{event.venue.name}</p>
                <p>{event.venue.city}</p>
                <p>{event.venue.country}</p>
                <p>{event.datetime}</p>
              </div>
            );
          })}
        </Events>
      </Wrapper>
    );
  }
}
export { Search };
