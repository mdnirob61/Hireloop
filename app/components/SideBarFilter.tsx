import { FilterChecklist, FilterOption } from './FilterChecklist';

const jobTypes: FilterOption[] = [
    { value: 'Full-time', label: 'Full-time', count: '1.2k' },
    { value: 'Contract', label: 'Contract', count: '432' },
    { value: 'Freelance', label: 'Freelance', count: '156' },
    { value: 'Part-time', label: 'Part-time', count: '320' },
    { value: 'Internship', label: 'Internship', count: '210' },
];

const statuses: FilterOption[] = [
    { value: 'active', label: 'Active', count: '1.1k' },
    { value: 'expired', label: 'Expired', count: '148' },
];

const categories: FilterOption[] = [
    { value: 'Engineering & Tech', label: 'Engineering & Tech' },
    { value: 'Design', label: 'Design' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Sales', label: 'Sales' },
    { value: 'Customer Support', label: 'Customer Support' },
    { value: 'Other', label: 'Other' },
];

const SideBarFilter = () => {
    return (
        <aside className="rounded-xl border border-white/[0.05] bg-[#151518] p-4">

            <h2 className="mb-5 text-base font-semibold text-white">
                Filters
            </h2>

            <div className="mb-6">
                <FilterChecklist
                    legend="Job Type"
                    name="jobType"
                    options={jobTypes}
                    multiple={false}
                />
            </div>

            <div className="mb-6 border-t border-white/[0.05] pt-5">
                <FilterChecklist
                    legend="Status"
                    name="status"
                    options={statuses}
                    multiple={false}
                />
            </div>

            <div className="border-t border-white/[0.05] pt-5">
                <FilterChecklist
                    legend="Category"
                    name="category"
                    options={categories}
                    multiple={false}
                />
            </div>

        </aside>
    );
};

export default SideBarFilter;