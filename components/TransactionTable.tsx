import React from 'react';

interface Transaction {
  id: string;
  type: string;
  amount: string;
  status: 'Completed' | 'Processed';
  time: string;
  dotColor: string;
}

const transactions: Transaction[] = [
  {
    id: 'TXN-84920',
    type: 'Capital Deposit',
    amount: '₹25,000',
    status: 'Completed',
    time: 'Today, 11:20 AM',
    dotColor: 'bg-secondary',
  },
  {
    id: 'TXN-84919',
    type: 'Monthly Return Payout',
    amount: '₹4,500',
    status: 'Processed',
    time: 'Today, 10:45 AM',
    dotColor: 'bg-secondary-container',
  },
  {
    id: 'TXN-84918',
    type: 'Referral Reward (1%)',
    amount: '₹500',
    status: 'Processed',
    time: 'Today, 09:15 AM',
    dotColor: 'bg-secondary-fixed',
  },
  {
    id: 'TXN-84917',
    type: 'Capital Deposit',
    amount: '₹10,000',
    status: 'Completed',
    time: 'Yesterday, 04:30 PM',
    dotColor: 'bg-secondary',
  },
  {
    id: 'TXN-84916',
    type: 'Monthly Return Payout',
    amount: '₹9,000',
    status: 'Processed',
    time: 'Yesterday, 02:10 PM',
    dotColor: 'bg-secondary-container',
  },
];

export default function TransactionTable() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
      {/* Mobile Card Layout (visible on xs, hidden on sm and above) */}
      <div className="block sm:hidden divide-y divide-outline-variant/20">
        {transactions.map((tx) => (
          <div key={tx.id} className="p-4 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-on-surface bg-surface-container px-2 py-0.5 rounded">
                {tx.id}
              </span>
              <span className="font-mono text-xs text-on-surface-variant">
                {tx.time}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${tx.dotColor}`}></span>
                <span className="font-medium text-sm text-on-surface">{tx.type}</span>
              </div>
              <span className={`font-mono font-bold text-sm ${tx.type === 'Monthly Return Payout' ? 'text-secondary' : 'text-on-surface'}`}>
                {tx.amount}
              </span>
            </div>

            <div className="flex items-center justify-end pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-xs font-semibold text-on-surface">
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  {tx.status === 'Completed' ? 'check_circle' : 'done_all'}
                </span>
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/Tablet Table Layout (hidden on xs, block on sm and above) */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider border-b border-outline-variant/30">
              <th className="py-3 px-4 sm:px-6 font-semibold">Transaction ID</th>
              <th className="py-3 px-4 sm:px-6 font-semibold">Type</th>
              <th className="py-3 px-4 sm:px-6 font-semibold text-right">Amount (₹)</th>
              <th className="py-3 px-4 sm:px-6 font-semibold text-center">Status</th>
              <th className="py-3 px-4 sm:px-6 font-semibold text-right">Date &amp; Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20 font-body-sm text-body-sm">
            {transactions.map((tx, idx) => (
              <tr 
                key={tx.id} 
                className={`transition-colors hover:bg-surface-container-low/40 ${
                  idx % 2 === 1 ? 'bg-surface-container-low/20' : ''
                }`}
              >
                <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-on-surface">
                  {tx.id}
                </td>
                <td className="py-3.5 px-4 sm:px-6">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${tx.dotColor}`}></span>
                    <span className="font-semibold text-on-surface">{tx.type}</span>
                  </div>
                </td>
                <td className={`py-3.5 px-4 sm:px-6 font-mono font-bold text-right ${
                  tx.type === 'Monthly Return Payout' ? 'text-secondary' : 'text-on-surface'
                }`}>
                  {tx.amount}
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high font-label-sm text-label-sm font-semibold text-on-surface">
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      {tx.status === 'Completed' ? 'check_circle' : 'done_all'}
                    </span>
                    {tx.status}
                  </span>
                </td>
                <td className="py-3.5 px-4 sm:px-6 font-mono text-right text-on-surface-variant">
                  {tx.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
