import { ImgBackground } from './StyledPostsScreen';

const PostsScreen = ({ children }) => {
    
    return (
        <ImgBackground
            source={require('../../img/PhotoBG.png')} 
        >
            {children}
        </ImgBackground>
    )
}

export default PostsScreen;