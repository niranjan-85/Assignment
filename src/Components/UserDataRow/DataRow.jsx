import React from 'react'

function DataRow(props) {

    const data = props.userData;

    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.lastLoggedIn ? data.lastLoggedIn : "Not Available"}</td>
            <td>
                <a href=""><button className=''><i className="fa-solid fa-eye"></i></button></a>
                <a href=""><button className=''><i className="fa-solid fa-pen"></i></button></a>
                <button className='' ><i className="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>


    )
}

export default DataRow