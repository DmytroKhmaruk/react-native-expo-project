
import { ButtonWrapper, ButtonText } from './StyledButton'

const Button = ({ title, onPress }) => {

    return (
        <ButtonWrapper onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonWrapper>
    );
};

export default Button;