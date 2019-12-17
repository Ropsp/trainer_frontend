import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import Addcustomer from './addcustomer';
import Editcustomer from './editcustomer';


export default function Customerlist () {
    const [customers, setCustomers] = useState ([]);

        useEffect(() => fetchData(), []);

        const fetchData = () => {
            fetch ('https://customerrest.herokuapp.com/api/customers')
            .then (response => response.json())
            .then (data => setCustomers(data.content))
            .catch (err => console.error(err))
        }

    const columns = [
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone number',
            accessor: 'phone'
        },
    ]

    return (
        <div>
            <ReactTable filterable={true} sortable={true} data={customers} columns={columns}/>
        </div>
    );
}