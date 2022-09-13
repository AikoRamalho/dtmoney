import { useContext } from 'react';
import incomeImg  from '../../assets/income.svg'
import outcomeImg  from '../../assets/outcome.svg'
import totalImg  from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Transaction } from '../../protocols/transaction';
import { Container } from "./styles";

interface MappedValues {
  [key: string]: number;
}

export function Summary() {
  const { transactions } = useTransactions();

  const mappedValues: MappedValues = {
    deposit: 0,
    withdraw: 0,
    total: 0,
  }

  const summary = transactions.reduce((mappedValues: MappedValues, transaction: Transaction) => {
    mappedValues[transaction.type] += transaction.amount;

    transaction.type === 'deposit' ? mappedValues.total += transaction.amount : mappedValues.total -= transaction.amount;

    return mappedValues;
  }, mappedValues)

  return (
    <Container>
      <div>
        <header>
          <p> Income </p>
          <img src={incomeImg} alt="Income" /> 
        </header>
        <strong> 
          {
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(summary.deposit)
          } 
        </strong>
      </div>
      <div>
        <header>
          <p> Outcome </p>
          <img src={outcomeImg} alt="Outcome" /> 
        </header>
        <strong> 
          -{
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(summary.withdraw)
          } 
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p> Total </p>
          <img src={totalImg} alt="Total" /> 
        </header>
        <strong> 
          {
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(summary.total)
          } 
        </strong>
      </div>
    </Container>
  )
}