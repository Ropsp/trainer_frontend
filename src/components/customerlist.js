import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import Addcustomer from './addcustomer';
import Editcustomer from './editcustomer';
import AddTraining from './addtraining';


export default function Customerlist () {
    const [customers, setCustomers] = useState ([]);

        useEffect(() => fetchData(), []);

        const fetchData = () => {
            fetch ('https://customerrest.herokuapp.com/api/customers')
            .then (response => response.json())
            .then (data => setCustomers(data.content))
            .catch (err => console.error(err))
        }


    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const saveTraining = (training, link) => {
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(training)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))

        alert("New training added successfully")
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method : 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        if (window.confirm("Do you want to delete this customer?")) {
        fetch (link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
    }
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
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: "links[0].href",
            Cell: row => <AddTraining training={row.original} saveTraining={saveTraining} />
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button color="secondary" size="small" onClick={() => deleteCustomer(row.value)}>Delete</Button>
        },
    ]

    return (
        <div>
            <Addcustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable={true} sortable={true} data={customers} columns={columns}/>
        </div>
    );
}