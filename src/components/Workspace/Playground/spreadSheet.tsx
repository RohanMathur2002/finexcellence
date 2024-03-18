import Spreadsheet from "react-spreadsheet";
import { useState } from "react";

const Sheet = () => {
    const [data, setData] = useState([
        [{ value: "" }, { value: "" }, { value: "" } , { value: "" }, { value: "" }, { value: "" }, { value: "" }],
        [{ value: "" }, { value: "" }, { value: "" }],
        [],
        [],
        [],
        [],
        [],
        [],
      ]);
      return <Spreadsheet data={data} onChange={setData} />;
};

export default Sheet;