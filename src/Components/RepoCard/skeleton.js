import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Container from './styles';

export default function SkeletonRepo() {
  return (

    <Container skeleton>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <div className="repoName">
          <Skeleton width={32} height={32} />
          <Skeleton width={300} height={20} />
        </div>

        <div className="repoDescription">
          <Skeleton width={200} height={30} />
          <Skeleton width={450} height={20} count={4} />
        </div>

        <div className="repoStatus">

          <div className="repoLanguage">
            <Skeleton width={120} height={40} />
          </div>

          <Skeleton width={40} height={40} circle />
          <Skeleton width={50} height={40} />

          <Skeleton width={40} height={40} circle />
          <Skeleton width={50} height={40} />

        </div>

        <Skeleton className="repoDownload" height={40} />
      </SkeletonTheme>
    </Container>

  );
}
