import FullScreenContainer from "../ui-elements/fullScreenContainer";
import SearchBar from "../components/SearchBar";
import Title from "../ui-elements/title";
import { useState } from "react";
import FilterSpecialties from "../components/FilterSpecialties";
import { Specialty } from "../utils/types";

import { trpc } from "../utils/trpc";

const Home = () => {
  const [, setSearchText] = useState<string>("");
  const [selectedSpecialtiesToFilter, setSelectedSpecialtiesToFilter] =
    useState<Specialty[]>([]);
  const { data } = trpc.company.getCompanies.useQuery({
    count: 4,
    filter: { name: "ara", specialties: ["Balcony", "Debris Removal"] },
  });

  const handleSearch = (text: string) => setSearchText(text);

  const handleFilterSpecialty = (specialties: Specialty[]) => {
    setSelectedSpecialtiesToFilter(specialties);
  };

  return (
    <FullScreenContainer>
      <Title>Search Companies</Title>
      <SearchBar onSearch={handleSearch} debounceInMs={200} />
      <FilterSpecialties
        selectedSpecialties={selectedSpecialtiesToFilter}
        onChange={handleFilterSpecialty}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </FullScreenContainer>
  );
};

export default Home;
