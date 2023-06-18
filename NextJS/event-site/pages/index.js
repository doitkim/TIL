import EventList from "../compoenets/events/event-list";
import { getFeaturedEvents } from "../data/dummy-data";

function Homepage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Homepage;
