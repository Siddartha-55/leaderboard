import React from 'react';
import { RankElementContainer, Elements, Img, UserDetails, UserId, Text } from './styledComponents';

const RankElement = ({ user }) => {
    return (
        <RankElementContainer>
            <Text>
                {user.rank}
            </Text>
            <Elements>
                    <Img src={user.profilePic} />
                    <UserDetails>
                        <p>{user.name}</p>
                        <UserId>@{user.userId}</UserId>
                    </UserDetails>
            </Elements>
            {user.addedPoints ? (
                <>
                <Text>
                    {user.points}
                </Text>
                <Text>
                    {user.addedPoints}
                </Text>
                </>
            ) : (
                <Text>
                    {user.points}
                </Text>
            )}
        </RankElementContainer>
    );
};

export default RankElement;