import Octicons, {
  Repo, DesktopDownload, RepoForked, Star,
} from '@primer/octicons-react';
import React from 'react';
import { useSelector } from 'react-redux';

import Skeleton from './skeleton';
import Container from './styles';

export default function RepoCard() {
  const { Repositories, Load } = useSelector((store) => store);


  return (
    Repositories !== null && Load !== true
      ? Repositories.map((repo) => (
        <Container key={repo.id}>
          <div className="repoName">
            <Octicons icon={Repo} size="medium" />
            <a href={repo.html_url} target="_self">
              {repo.name}
            </a>
          </div>
          {
            repo.description !== null
              ? (
                <div className="repoDescription">
                  <h1>Description</h1>
                  <p>{repo.description}</p>
                </div>
              )
              : null
          }
          <div className="repoStatus">
            {
              repo.language !== null
                ? (
                  <div className="repoLanguage">
                    <h1>{repo.language}</h1>
                  </div>
                )
                : null
              }
            {
              repo.stargazers_count >= 0 && repo.forks_count >= 0
                ? (
                  <>
                    <Octicons icon={RepoForked} size="medium" />
                    <h2>{repo.forks_count}</h2>

                    <Octicons icon={Star} size="medium" />
                    <h2>{repo.stargazers_count}</h2>
                  </>
                )
                : null
            }
          </div>

          <div className="repoDownload">

            <a href={repo.archive_url} target="_self" className="repoDownload">
              <Octicons icon={DesktopDownload} size="medium" />
            </a>
          </div>

        </Container>
      ))
      : (
        <>
          {' '}
          <Skeleton />
          {' '}
          <Skeleton />
        </>
      )
  );
}
