import './styles.css';
import TableHead from './TableHead';
import TableBody from './TableBody';

function TransactionsList() {
  return (
    <div className="table">
      <TableHead />
      <TableBody />
    </div>
  );
}

export default TransactionsList;