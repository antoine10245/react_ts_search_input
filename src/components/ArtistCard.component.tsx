import * as React from "react";
import styled from "styled-components";
import { ArtistInterface } from "../interfaces/App.interfaces";

const Wrapper = styled.div``;
const Card = styled.div``;

interface ArtistCardProps {
  artist: ArtistInterface;
}

const ArtistCard: React.FunctionComponent<ArtistCardProps> = ({ artist }) => (
  <Wrapper className="col-xs-12 col-lg-4 mb-4">
    <Card className="card">
      <img
        className="card-img-top"
        src={artist.image_url}
        alt="Card Aartist cap"
      />
      <div className="card-body">
        <h5 className="card-title">{artist.name}</h5>
        <p className="card-text">{artist.facebook_page_url}</p>
        <a href={artist.facebook_page_url} className="btn btn-primary">
          Go to facebook
        </a>
      </div>
    </Card>
  </Wrapper>
);

export default ArtistCard;
