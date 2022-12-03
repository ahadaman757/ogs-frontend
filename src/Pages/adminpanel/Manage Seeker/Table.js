import React, { useState, useEffect } from "react";
import Record from "./Record";
const Table = ({ seeker_data, deletedId }) => {
    const [currentSeekers, setcurrentSeekers] = useState(seeker_data)
    console.log(currentSeekers)
    const refreshUsers = (id) => {
        const filtered = currentSeekers.filter(seeker => {
            return seeker.id !== id
        })
        setcurrentSeekers(filtered)
    }
    useEffect(() => {
        setcurrentSeekers(seeker_data)
        console.log(seeker_data)

    }, [seeker_data])

    return (
        <div className="container py-4">
            <table className="table srolll">
                <thead>
                    <tr>
                        <th className="ogsfonts14">Sr</th>
                        <th className="ogsfonts14"> seeker code</th>
                        <th className="ogsfonts14">job title</th>
                        <th className="ogsfonts14">full name</th>
                        <th className="ogsfonts14">Address</th>
                        <th className="ogsfonts14">phone</th>
                        {/* <th className="ogsfonts14">Date</th> */}
                        <th className="ogsfonts14">cv</th>
                        <th className="ogsfonts14">options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentSeekers && currentSeekers.map((seeker, index) => {
                            return <Record deletedId={refreshUsers} seeker={seeker} index={index} />

                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default Table