import incomeImg  from '../../assets/income.svg'
import outcomeImg  from '../../assets/outcome.svg'
import totalImg  from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p> Income </p>
          <img src={incomeImg} alt="Income" /> 
        </header>
        <strong> $10000 </strong>
      </div>
      <div>
        <header>
          <p> Outcome </p>
          <img src={outcomeImg} alt="Outcome" /> 
        </header>
        <strong> - $4000 </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p> Total </p>
          <img src={totalImg} alt="Total" /> 
        </header>
        <strong> $6000 </strong>
      </div>
    </Container>
  )
}