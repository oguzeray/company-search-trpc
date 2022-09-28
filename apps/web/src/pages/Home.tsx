// import { trpc } from "../utils/trpc";
import FullScreenContainer from "../ui-elements/fullScreenContainer";
import SearchBar from "../components/SearchBar";

const Home = () => {
  // const { data } = trpc.company.getCompanies.useQuery({
  //   name: "Ali",
  //   surname: "Veli",,
  //   school: { name: "vas", year: 2 },
  // });

  return (
    <FullScreenContainer>
      <SearchBar onSearch={(text) => console.log(text)} debounceInMs={200} />
    </FullScreenContainer>
  );
};

export default Home;
