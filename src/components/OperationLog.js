import React from "react";
import OperationLogs from "./OperationLogs";
import operationLogs from "../reducers/operationLogs";

const OperationLog = ({operationLog}) => {
  return (
    <tr >
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  );
};
export default OperationLog;
