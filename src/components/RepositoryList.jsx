import RepositoryItem from './RepositoryItem';

export default function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repositorios</h1>
            <ul>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}