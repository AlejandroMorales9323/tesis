type PageHeaderProps = {
    title: string;
}


export function PageHeader({title}: PageHeaderProps) {
    return (
        <h1>{title}</h1>
    );
}

