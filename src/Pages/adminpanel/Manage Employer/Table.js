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
                        <th className="ogsfonts14">Employer code</th>
                        <th className="ogsfonts14">Company Code</th>
                        <th className="ogsfonts14">Company Name</th>
                        <th className="ogsfonts14">Company City</th>
                        <th className="ogsfonts14">Company Country</th>
                        <th className="ogsfonts14">Contact</th>
                        <th className="ogsfonts14">Jobs</th>
                        <th className="ogsfonts14">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmployers && currentEmployers.map((employer, index) => {
                            return <Record deletedId={refreshUsers} employer={employer} index={index} />

                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default Table