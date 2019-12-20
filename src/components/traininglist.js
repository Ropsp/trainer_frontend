import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import Moment from 'moment';





export default function Traininglist () {
    const [trainings, setTrainings] = useState ([]);
    const tlink = 'https://customerrest.herokuapp.com/api/trainings/'
    const [alert, setAlert] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch ('https://customerrest.herokuapp.com/gettrainings')
        .then (response => response.json())
        .then (data => setTrainings(data))
        .catch (err => console.error(err))
    }

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure you want to delete this training?')) {
            fetch(tlink + link, { method: 'DELETE' })
                .then(res => fetchData())
                .then(res => setAlert('Training deleted!'))
                .then(res => setOpen(true))
                .catch(err => console.error(err))
        }
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => Moment(row.value).format('DD.MM.YYYY HH:MM')
           
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Customers firstname',
            accessor: 'customer.firstname'
        },
        {
            Header: 'Customers lastname',
            accessor: 'customer.lastname'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'id',
            Cell: row => <Button color="secondary" size="small" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
        
        
    ]

    return (
        <div>
            <ReactTable filterable={true} sortable={true} data={trainings} columns={columns}/>
        </div>
    );
}

