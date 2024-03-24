import { useRouter } from "next/router";

function EventDetailPage() {
  const router = useRouter();

  console.log(router.query.eventId);

  return (
    <div>
      <h1>Event Detail</h1>
      <p>Here you can find your details</p>
      <p>your id is {router.query.eventId}</p>
    </div>
  );
}

export default EventDetailPage;
