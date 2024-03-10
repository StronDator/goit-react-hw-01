import css from "./TransactionHistory.module.css";
export default TransactionHistory;

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.column}>Type</th>
          <th className={css.column}>Amount</th>
          <th className={css.column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el) => (
          <tr className={css.row} key={el.id}>
            <td className={css.rowData}>{el.type}</td>
            <td className={css.rowData}>{el.amount}</td>
            <td className={css.rowData}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
