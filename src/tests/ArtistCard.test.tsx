import * as React from "react";
import { shallow } from "enzyme";
import ArtistCard from "../components/ArtistCard.component";

const mockArtist = {
  id: 123,
  name: "hallo",
  url: "hallo",
  image_url: "hallo",
  thumb_url: "hallo",
  facebook_page_url: "hallo",
  mbid: "hallo",
  tracker_count: 123,
  upcoming_event_count: 123
};

describe("ArtistCard component", () => {
  it("renders without crashing", () => {
    const subject = shallow(<ArtistCard artist={mockArtist} />);
    expect(subject).toMatchSnapshot();
  });
});
