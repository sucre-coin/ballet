import './transaction.scss';
import { FaLevelUpAlt, FaLevelDownAlt } from 'react-icons/fa';

const Transaction = () => {

  return (
    <div className="transaction">
      <div><FaLevelUpAlt /> <FaLevelDownAlt /></div>      
      <div>
        <div>
        <div>receive</div>
        <div>000000000000</div>
        </div>
        <div>
          time
        </div>
      </div>
    </div>
  );
};

export { Transaction };
