
import { ButtonWrapper, ButtonText } from './StyledButton'

const SubmitButton = ({ title, onPress }) => {

    return (
        <ButtonWrapper onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </ButtonWrapper>
    );
};

export default SubmitButton;