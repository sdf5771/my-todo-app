import React, {useState, useEffect} from 'react';
import Atoms from 'components/Atoms';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useTodo } from 'hooks';

ChartJS.register(ArcElement, Tooltip, Legend);

function UserChart(){
   const {getTodosCount} = useTodo();
   const countResult = getTodosCount();
   console.log('countResult ', countResult);
   const [chartData, setChartData] = useState({
    labels: ['Total', "Ready", "Complete"],
    datasets: [
        {
            label: 'Value',
            data: [0,0,0],
            backgroundColor: [
                'rgba(110, 65, 226, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(110, 65, 226, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        }
    ]
   });

   useEffect(() => {
    setChartData({
        labels: ['Total', "Complete", "Ready"],
        datasets: [
            {
                label: 'Value',
                data: [countResult.total, countResult.complete, countResult.ready],
                backgroundColor: [
                    'rgba(110, 65, 226, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(110, 65, 226, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            }
        ]
       })
   }, [countResult.complete, countResult.total, countResult.ready])

    return(
        <Atoms.Div 
            display="flex" 
            justifyContent='center' 
            alignContent='center'
            border='2px solid #6E41E2'
            borderRadius="8px"
            width="100%"
            >
                {chartData.datasets[0].data[0] === 0 ? 
                    <Atoms.Span 
                        fontSize="1.2rem" 
                        fontWeight={600} 
                        color="#6E41E2"
                        > 시각화 할 수 있는 할 일이 없어요 🤔 </Atoms.Span> 
                        : <Pie data={chartData} />}
        </Atoms.Div>
    )
}

export default UserChart;