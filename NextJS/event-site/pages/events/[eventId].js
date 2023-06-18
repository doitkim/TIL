import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";
import EventSummary from "../../compoenets/event-detail/event-summary";
import EventLogistics from "../../compoenets/event-detail/event-logistics";
import EventContent from "../../compoenets/event-detail/event-content";
import ErrorAlert from "../../compoenets/events/ui/error-alert";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
