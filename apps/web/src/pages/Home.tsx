import FullScreenContainer from "../ui-elements/fullScreenContainer";
import SearchBar from "../components/SearchBar";
import Title from "../ui-elements/title";
import { useState } from "react";
import FilterSpecialties from "../components/FilterSpecialties";
import { Specialty } from "../utils/types";
import FilteredCompanies from "../components/FilteredCompanies";

const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedSpecialtiesToFilter, setSelectedSpecialtiesToFilter] =
    useState<Specialty[]>([]);

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
      <FilteredCompanies
        input={{
          count: 20,
          filter: {
            name: searchText,
            specialties: selectedSpecialtiesToFilter,
          },
        }}
      />
    </FullScreenContainer>
  );
};

export default Home;
