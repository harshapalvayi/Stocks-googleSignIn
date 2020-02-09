export enum Tabs {
  PRICE = 'PRICE',
  COST = 'COST',
  EQUITY = 'EQUITY',
  DIVIDEND = 'DIVIDEND',
  MONTHLY_DIVIDEND = 'MONTHLY_DIVIDEND'
}

export const MenuTabs = {
    reportTabs: [
      { label: 'Price', value: Tabs.PRICE, id: 0 },
      { label: 'Cost', value: Tabs.COST, id: 1 },
      { label: 'Equity', value: Tabs.EQUITY, id: 2 },
      { label: 'Dividends', value: Tabs.DIVIDEND, id: 3 },
      { label: 'Monthly Dividends', value: Tabs.MONTHLY_DIVIDEND, id: 4 }
    ]
};
