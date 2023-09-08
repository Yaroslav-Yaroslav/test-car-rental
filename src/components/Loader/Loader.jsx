import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';
const Loader = () => (
  <LoaderContainer>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#3470ff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </LoaderContainer>
);

export default Loader;
