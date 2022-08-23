import { api } from "../../services/api";
import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions')
      .then((response: { data: Array<Object>; }) => console.log(response.data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th> Title </th>
            <th> Amount </th>
            <th> Category </th>
            <th> Date </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> Website Development </td>
            <td className="deposit"> $12000 </td>
            <td> Development </td>
            <td> 02/20/2022 </td>
          </tr>
          <tr>
            <td> Rent </td>
            <td className="withdraw"> -$1100 </td>
            <td> House </td>
            <td> 02/10/2022 </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}