import React, { useState, useEffect } from 'react';
const Exercise3Data=(props)=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const currentData = await response.json();
            setData(currentData);
        }
        fetchData();
    },[])
    return (
        <div className="grid grid-cols-3 gap-4 m-3">
            {data.map(d=> {
                return (<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" key={d.id}>
                    <div className="pt-6 space-y-4">
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {d.name}
                            </div>
                        </figcaption>
                    </div>
                </figure>)
            })}
        </div>
    )
}
export default Exercise3Data;