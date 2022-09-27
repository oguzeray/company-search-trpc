import { Suspense } from "react";
import { trpc } from "../utils/trpc";

const Home = () => {
  const { data } = trpc.company.getCompanies.useQuery({
    name: "Ali",
    surname: "Veli",
    school: { name: "vas", year: 2 },
  });

  return (
    <Suspense fallback={<div>LOADing</div>}>
      <div>{data}</div>
      <input
        id="search"
        type="text"
        spellCheck="false"
        placeholder="Search a Title"
      />
    </Suspense>
  );
};
export default Home;
