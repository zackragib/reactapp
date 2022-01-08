
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Bar, Pie, Doughnut, Line, PolarArea } from 'react-chartjs-2'

function ChartComponent() {

    const [desi, setDesi] = useState([2, 12, 3, 5, 10, 3])

   

    const [data, setData] = useState( {
        labels: ['Site Admin', 'Timekeepers', 'Planners', 'Engineers', 'Clerks', 'QS', 's'],
        datasets: [{
            label: 'Number of Designations',
            data: [...desi, 22],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: 'Number of Designations',
            data: [2, 5, 6, 1, 15, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },)

    const addHandler = () => {
        setDesi([2, 1, 3, 5, 10, 3])
        
        console.log(desi);
    }
    
   
    
    return (
        <div>
            Chart Component here
            <Button onClick={addHandler}>Add Timekeepers</Button>

            <hr />
            <div >
            <Line
             data= {data}
             width = {100}
             height= {50}
             options = {
                 {}
             }>
               
                </Line>
            </div>
            <div  style={{height:'50%', width:'50%'}}>
            <PolarArea
             data= {data}
             width = {100}
             height= {50}
             options = {
                 {}
             }>
               
                </PolarArea>
            </div>
            
        </div>
    )
}

export default ChartComponent
