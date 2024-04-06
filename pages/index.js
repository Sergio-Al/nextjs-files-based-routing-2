import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage({ events }) {
  return (
    <div>
      <h1>Hello, React app!</h1>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
