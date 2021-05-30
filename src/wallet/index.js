import { Menu } from './Menu';
import { BackgroundContainer, ContentContainer } from '../components/Container';
import { Divider } from '../components/Divider';
import Transactions from './transactions';

const MyWallet = () => {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <h1>Activity</h1>
        <Divider></Divider>
        <Transactions></Transactions>
      </ContentContainer>
      <Menu>
      </Menu>
    </BackgroundContainer>
  );
}

export { MyWallet };
