import { UserWrapper, AvatarWrapper, Image, InfoWrapper, Login, Email } from "./StyledUserInfo"

const UserInfo = ({ login, email, uri }) => {
    return (
        <UserWrapper>
            <AvatarWrapper>
                <Image
                    // source={{ uri }}
                    resizeMode="cover"
                />
            </AvatarWrapper>
            <InfoWrapper>
                <Login>
                    Dmytro Khmaruk
                    {/* {login} */}
                </Login>
                <Email>
                    dmytro@khmaruk.com
                    {/* {email} */}
                </Email>
            </InfoWrapper>
        </UserWrapper>
    )
}

export default UserInfo;