import './Dashboard.css';
import React from 'react'
import DataRow from '../UserDataRow/DataRow';

function Dashboard(props) {
    console.log(props.userDataList)
    return (
        <>
            <h1>User DashBoard</h1>
            <div className='table-container'>
                <table className='content-table'>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Last Login Time</th>
                            <th>Dashboard Controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.userDataList.length === 0 ?
                                <tr><td className='no-data' colSpan={5}>No data Available</td></tr>
                                :
                                props.userDataList.map(
                                    (item) => {
                                        return <DataRow userData={item} />
                                    }
                                )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard