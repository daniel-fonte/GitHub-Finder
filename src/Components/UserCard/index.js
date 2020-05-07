import Octicons, { Location, Organization } from '@primer/octicons-react';
import React from 'react';
import { useSelector } from 'react-redux';

import SkeletonUser from './skeleton';
import Container from './styles';

export default function UserCard() {
  const { User, Load } = useSelector((store) => store);

  return (
    User !== null && Load !== true
      ? (
        <Container>
          <div className="userImg">
            <img src={User.avatar_url} alt="User Profille" />
          </div>
          <div className="userNames">
            <h1>{User.name}</h1>
            <h2>
              <a href={User.html_url} target="_self">
                {User.login}
              </a>
            </h2>
          </div>

          {
                User.bio !== null
                  ? (
                    <div className="userBio">
                      <p>{User.bio}</p>
                    </div>
                  )
                  : null
            }

          {
                User.company !== null
                  ? (
                    <div className="userCompany">
                      <Octicons icon={Organization} size="medium" />
                      <h1>{User.company}</h1>
                    </div>
                  )
                  : null
           }

          {
                User.location !== null
                  ? (
                    <div className="userLocation">
                      <Octicons icon={Location} size="medium" />
                      <h1>{User.location}</h1>
                    </div>
                  )
                  : null
           }
        </Container>
      )
      : Load === true ? <SkeletonUser /> : null
  );
}
