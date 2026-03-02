import { Group, Button } from '@mantine/core';
type FilterType = "all" | "active" | "completed";

type TodoFiltersProps = {
    filter: FilterType
    onFilterChange: (filter: FilterType) => void
}

export function TodoFilters ({filter, onFilterChange}: TodoFiltersProps) {
    return (
        <>
            <Group>
                <Button onClick={() => onFilterChange("all")}>
                    All
                </Button>
                <Button onClick={() => onFilterChange("active")}>
                    Active
                </Button>
                <Button onClick={() => onFilterChange("completed")}>
                    Completed
                </Button>
            </Group>
        </>
    )
}