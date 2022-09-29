import { trpc } from "../utils/trpc";
import CheckboxUI from "../ui-elements/checkbox";
import { ChangeEvent } from "react";
import { Specialty } from "../utils/types";

interface FilterSpecialtiesProps {
  selectedSpecialties: Specialty[];
  onChange: (specialties: Specialty[]) => void;
}

const FilterSpecialties = ({
  selectedSpecialties,
  onChange,
}: FilterSpecialtiesProps) => {
  const { data: specialties } = trpc.company.getCompanySpecialties.useQuery();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    checkedSpecialty: Specialty
  ) => {
    if (e.target.checked) {
      onChange([...selectedSpecialties, checkedSpecialty]);
      return;
    }
    onChange(
      selectedSpecialties.filter((specialty) => specialty !== checkedSpecialty)
    );
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="flex w-full flex-wrap justify-center p-3">
        {specialties?.map((listItem) => (
          <CheckboxUI
            key={listItem}
            label={listItem}
            checked={selectedSpecialties.includes(listItem)}
            onChange={(e) => handleChange(e, listItem)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSpecialties;
