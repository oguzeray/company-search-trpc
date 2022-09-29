import { Company } from "./interface";

export class CompanyFilter {
  private companies: Company[];

  constructor(companies: Company[]) {
    this.companies = companies;
  }

  applyNameFilter(searchText: string) {
    this.companies = this.companies.filter((company) =>
      company.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  applySpecialtyFilter(specialtyToFilterBy: Company["specialties"][number]) {
    this.companies = this.companies.filter((company) =>
      company.specialties.includes(specialtyToFilterBy)
    );
  }

  getFilteredCompanies(count: number) {
    return this.companies.slice(0, count);
  }
}
