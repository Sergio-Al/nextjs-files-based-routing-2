import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();

  const queries = router.query.slug;

  console.log(router.query.slug);

  return (
    <div>
      <h1>Filtered Events</h1>
      {queries.map((query, index) => (
        <p key={query}>
          Param: {index + 1} {query}
        </p>
      ))}
    </div>
  );
}

export default FilteredEventsPage;
