import { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';
import '../styles/repositories.scss'



export default function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/felipegenuino/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Repositorios</h1>
            <ul>

                {
                    repositories.map(
                        repo => (
                            <RepositoryItem key={repo.name} repository={repo} />
                        )
                    )
                }

            </ul>
        </section>
    )
}