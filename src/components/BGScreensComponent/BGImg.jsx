import { ImgBackground } from './StyledBGImg';

const BGImg = ({children}) => {
    
    return (
        <ImgBackground
            source={require('../../img/PhotoBG.png')} 
        >
            {children}
        </ImgBackground>
    )
}

export default BGImg;