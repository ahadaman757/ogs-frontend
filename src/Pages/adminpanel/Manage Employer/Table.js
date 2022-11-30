import React, { useState, useEffect } from "react";
import Record from "./Record";
const Table = ({ employer_data }) => {
    const [currentEmployers, setcurrentEmployers] = useState(employer_data)
    console.log(currentEmployers)
    const refreshUsers = (id) => {
        const filtered = currentEmployers.filter(seeker => {
            return seeker.id !== id
        })
        setcurrentEmployers(filtered)
    }
    useEffect(() => {
        setcurrentEmployers(employer_data)
        console.log(employer_data)

    }, [employer_data])
    console.log(currentEmployers)
    return (
        <div className="container py-4">
            <table className="table srolll">
                <thead>
                    <tr>
                        <th className="ogsfonts14">Sr</th>
                        <th className="ogsfonts14"> Employer code</th>
                        <th className="ogsfonts14">full name</th>
                        <th className="ogsfonts14">Address</th>
                        <th className="ogsfonts14">phone</th>
                        <th className="ogsfonts14">Company Name</th>
                        <th className="ogsfonts14">Jobs</th>
                        <th className="ogsfonts14">options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployers && currentEmployers.map((seeker, index) => {
                            return <Record deletedId={refreshUsers} seeker={seeker} index={index} />

                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default Table