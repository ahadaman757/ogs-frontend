import React, { useEffect, useState } from 'react'
import Tick from "../../../Assets/Images/tick.svg";
import removered from "../../../Assets/Images/removered.svg";
import Styles from "../../../Components/table/table.module.css";
import { BasicDocument } from "../../../Components/pdfDownload.js";
import { PDFDownloadLink, Image } from "@react-pdf/renderer";
import axios from 'axios';

function Record({ employer, index, deletedId }) {
    const [employerjobs, setemployerjobs] = useState([])
    const [deleted, setdeleted] = useState(false)
    // Delete A User
    const Deleteuser = (id) => {
        axios.delete("http://localhost:3002/admin/users", {
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
        axios.get(`http://localhost:3002/admin/jobs/${employer.id}`, {
            headers: {
                accesstoken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                console.log(res)
                // setJobs(res.data);
                setemployerjobs(res.data)
                // setJobsLoading(false);
            }).catch(error => {
                console.log(error)
            });

    }, [])

    // useEffect(() => {
    //     axios.get(`http://localhost:3002/getcvforuser/${seeker.id}`, {
    //         headers: {
    //             accesstoken: localStorage.getItem("accessToken")
    //         }
    //     }).then(res => {
    //         console.log(res.data)
    //         res.data.length && setcv_data(res.data[0])
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])
    // <th className="ogsfonts14">Sr</th>
    // <th className="ogsfonts14">Employer code</th>
    // <th className="ogsfonts14">Company Code</th>
    // <th className="ogsfonts14">Company Name</th>
    // <th className="ogsfonts14">Company City</th>
    // <th className="ogsfonts14">Company Country</th>
    // <th className="ogsfonts14">Contact</th>
    // <th className="ogsfonts14">Jobs</th>
    // <th className="ogsfonts14">Options</th>
    return (
        (deleted === false) ? <tr>
            <th className="ogsfonts14" scope="row">
                {index + 1}
            </th>
            <td className="ogsfonts14">{employer.id}</td>
            <td className="ogsfonts14">{employer.companyId} </td>
            <td className="ogsfonts14">{employer.company_name} </td>
            {/* <td className="ogsfonts14">{seeker.first_name + " " + seeker.last_name}</td> */}
            <td className="ogsfonts14">{employer.company_city}</td>
            <td className="ogsfonts14">{employer.company_country}</td>
            <td className="ogsfonts14">{employer.contact_no}</td>
            <td className="ogsfonts14">{employerjobs.length + " jobs posted"}</td>
            {/* <td className="ogsfonts14">6</td> */}

            <td className="ogsfonts14">
                <button className={`${Styles.btn}`}>
                    <span>
                        <img src={Tick} />
                    </span>
                </button>
                <button onClick={() => Deleteuser(employer.id)} className={`${Styles.btn}`}>
                    <span>
                        <img src={removered} />
                    </span>
                </button>
            </td>
        </tr> : null

    )
}

export default Record