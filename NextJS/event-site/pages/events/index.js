import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../compoenets/events/event-list";
import EventsSearch from "../../compoenets/events/events-search";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
