import Link from "next/link";
function Events() {
  return (
    <div>
      <h1>Events</h1>
      <ul>
        <li>
          <Link href="events/event1">Event1</Link>
        </li>
        <li>
          <Link href="events/event2">Event2</Link>
        </li>
        <li>
          <Link href="events/event3">Event3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Events;
