import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Container from './styles';

export default function SkeletonUser() {
  return (

    <Container skeleton>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <div className="userImg">
          <Skeleton width={120} height={120} circle />
        </div>
        <div className="userNames">
          <Skeleton width={180} height={20} />
          <Skeleton width={120} height={10} />
        </div>


        <div className="userBio">
          <Skeleton width={200} height={10} count={4} />
        </div>


        <div className="userCompany">
          <Skeleton width={40} height={40} circle />
          <Skeleton width={150} height={40} />
        </div>


        <div className="userLocation">
          <Skeleton width={40} height={40} circle />
          <Skeleton width={150} height={40} />
        </div>
      </SkeletonTheme>
    </Container>
  );
}
