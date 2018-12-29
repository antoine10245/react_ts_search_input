import * as React from "react";
import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import * as _ from "lodash";
import {
  SearchInterface,
  ArtistInterface,
  EventsInterface
} from "./interfaces/App.interfaces";

import Header from "./components/common/Header.component";
import ArtistCard from "./components/ArtistCard.component";
import EventsTable from "./components/EventsTable.component";

const Wrapper = styled.div``;
const SearchInput = styled.div``;
const Row = styled.div``;

const API = "https://rest.bandsintown.com/artists/";
const APP_ID = "123123";
const ENTER_KEY = 13;
class App extends React.Component<{}, SearchInterface> {
  state: SearchInterface = {
    artistName: "",
    artist: null as ArtistInterface,
    artistEvents: null as EventsInterface,
    noResult: null
  };

  getDataByArtistName = () => {
    if (this.state.artistName) {
      Promise.all([this.getArtist(), this.getArtistEvents()]).then(response => {
        if (response) {
          this.setState({
            noResult: _.isEmpty(response[0]),
            artist: response[0],
            artistEvents: response[1]
          });
        }
      });
    }
  };

  getArtist = async () => {
    return fetch(`${API}${this.state.artistName}/?app_id=${APP_ID}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);
  };

  getArtistEvents = async () => {
    return fetch(`${API}${this.state.artistName}/events/?app_id=${APP_ID}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);
  };

  handleInputChange = (event: any) => {
    this.setState({ artistName: event.target.value }, this.getDataByArtistName);
  };

  handleKeyDown(event: any) {
    if (event.key === ENTER_KEY) {
      this.getDataByArtistName();
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper className="container-fluid">
          <SearchInput className="form-group col-sm-12 col-xl-3 pt-4 p-0">
            <DebounceInput
              className="form-control"
              placeholder="Enter artist name"
              onChange={this.handleInputChange}
              onKeyDown={this.handleKeyDown}
              minLength={1}
              debounceTimeout={500}
              value={this.state.artistName}
            />
          </SearchInput>

          {!_.isEmpty(this.state.artist) && (
            <Row className="row">
              <ArtistCard artist={this.state.artist} />
              <EventsTable events={this.state.artistEvents} />
            </Row>
          )}

          {this.state.noResult && (
            <h2 className="alert-light text-center">No Artist Found</h2>
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
