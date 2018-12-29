import * as React from "react";
import styled from "styled-components";
import * as moment from "moment";

import { EventsInterface } from "../interfaces/App.interfaces";

const Wrapper = styled.div``;

interface EventsTableProps {
  events: EventsInterface;
}

const EventsTable: React.FunctionComponent<EventsTableProps> = ({ events }) => (
  <Wrapper className="col-sm-12 col-xl-8">
    {events.length ? (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Venue</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
            <th scope="col">datetime</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, i) => {
            return (
              <tr key={i}>
                <th scope="row">{event.venue.name}</th>
                <td>{event.venue.city}</td>
                <td>{event.venue.country}</td>
                <td>
                  {moment(event.datetime).format("h:mm a,dddd, MMMM Do YYYY")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    ) : (
      <h2 className="alert-light text-center">no events found</h2>
    )}
  </Wrapper>
);
export default EventsTable;
