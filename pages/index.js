import Head from "next/head";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage({ events }) {
  return (
    <div>
      <Head>
        <titlte>NextJS events</titlte>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
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
