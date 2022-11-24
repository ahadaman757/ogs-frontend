import { map } from "jquery";

const Table = (props) => {
  return (
    <div class="container py-4">
      <table class="table srolll">
        <thead>
          <tr>
            <th className="ogsfonts14"> {props.Sr}</th>
            <th className="ogsfonts14"> {props.Code}</th>
            <th className="ogsfonts14">{props.Title}</th>
            <th className="ogsfonts14">{props.Name}</th>
            <th className="ogsfonts14">{props.Address}</th>
            <th className="ogsfonts14">{props.Phone}</th>
            <th className="ogsfonts14">{props.Date}</th>
            <th className="ogsfonts14">{props.cv}</th>
            <th className="ogsfonts14">{props.Option}</th>
          </tr>
        </thead>
        <tbody>
          {props.array.length > 0
            ? props.array.map((item) => {
                return (
                  <tr>
                    <th className="ogsfonts14" scope="row">
                      {item.id}
                    </th>
                    <td className="ogsfonts14">{item.Code}</td>
                    <td className="ogsfonts14">{item.Title}</td>
                    <td className="ogsfonts14">{item.Name}</td>
                    <td className="ogsfonts14">{item.Address}</td>
                    <td className="ogsfonts14">{item.Phone}</td>
                    <td className="ogsfonts14">{item.Date}</td>
                    <td className="ogsfonts14">{item.cv}</td>
                    <td className="ogsfonts14">
                      <button></button>
                    </td>
                  </tr>
                );
              })
            : " No Data "}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
