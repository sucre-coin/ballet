import { connect } from 'react-redux';
import findTransaction from '../../store/actions/findTransaction';
import './index.scss';
import { Transaction } from './transaction';

const Divider = ({ transactions }) => {
  
  return (
    <div className="transaction-container">
      {
        transactions.map((transaction) => <Transaction transaction={transaction} />)
      }
    </div>
  );
};

const mapStateToProps = state => ({
  transactions: state.transactions,
});

const mapDispatchToProps = {
  findTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Divider);
