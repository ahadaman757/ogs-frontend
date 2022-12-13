import React, { useEffect, useState } from 'react'
import Tick from "../../../Assets/Images/tick.svg";
import removered from "../../../Assets/Images/removered.svg";
import Styles from "../../../Components/table/table.module.css";
import { BasicDocument } from "../../../Components/pdfDownload.js";
import { PDFDownloadLink, Image } from "@react-pdf/renderer";
import axios from 'axios';

function Record({ seeker, index, deletedId }) {
    const [cv_data, setcv_data] = useState(null)
    const [deleted, setdeleted] = useState(false)
    // Delete A User
    const Deleteuser = (id) => {
        axios.delete("http://3.110.201.21:3002/admin/users", {
            headers: {
                accesstoken: localStorage.getItem("accessToken")
            },
            data: {
                user_id: id
            }
        }).then(res => {
            deletedId(id)
            setdeleted(true)
            console.log("user deleted")
        }).catch(error => {
            console.log(error)
        })
    }
    useEffect(() => {
        axios.get(`http://3.110.201.21:3002/getcvforuser/${seeker.id}`, {
            headers: {
                accesstoken: localStorage.getItem("accessToken")
            }
        }).then(res => {
            console.log(res.data)
            res.data.length && setcv_data(res.data[0])
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        (deleted === false) ? <tr>
            <th className="ogsfonts14" scope="row">
                {index + 1}
            </th>
            <td className="ogsfonts14">{seeker.id}</td>
            <td className="ogsfonts14">{seeker.job_title} </td>
            <td className="ogsfonts14">{seeker.first_name + " " + seeker.last_name}</td>
            <td className="ogsfonts14">{seeker.address}</td>
            <td className="ogsfonts14">{seeker.contact_number}</td>
            {/* <td className="ogsfonts14">6</td> */}
            <td className="ogsfonts14">
                {
                    (cv_data !== null) ? <PDFDownloadLink
                        document={<BasicDocument cv_data={cv_data} />}
                        fileName="somename.pdf"
                    >
                        {({ loading, error }) => {
                            console.log(error);
                            return loading ? "Loading document..." : "Download now!";
                        }}
                    </PDFDownloadLink> : "No Cv"
                } </td>
            <td className="ogsfonts14">
                <button className={`${Styles.btn}`}>
                    <span>
                        <img src={Tick} />
                    </span>
                </button>
                <button onClick={() => Deleteuser(seeker.id)} className={`${Styles.btn}`}>
                    <span>
                        <img src={removered} />
                    </span>
                </button>
            </td>
        </tr> : null

    )
}

export default Record