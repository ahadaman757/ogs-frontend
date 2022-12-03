import { map } from "jquery";
import React, { useState } from "react";
import removered from "../../../Assets/Images/removered.svg";
import Styles from "../../../Components/table/table.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewsLetterTable = ({ emailList }) => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <table className="table srolll">
        <thead>
          <tr>
            <th className="ogsfonts14">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {emailList.map((item) => {
            return (
              <tr key={item.id}>
                <td className="ogsfonts14">{item.email} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NewsLetterTable;
