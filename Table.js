/**
 * two components
 * the child and the parent
 * the child has the time table of the home  chors
 * and then the child component will only show when the person logged in is the administrator
 */
import "./Table.scss";
function Table() {
  return (
    <>
      <h1 className="sharif">my weekly time table</h1>
      <table>
        <tr>
          <th>Day</th>
          <th>Activity</th>
        </tr>
        <tr>
          <td>Monday</td>
          <td>Compound cleaning</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>Washing clothes</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>Mopping</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>Clean Vehicles</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>General cleaning</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>Church</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>Farming</td>
        </tr>
      </table>
    </>
  );
}
export default Table;
