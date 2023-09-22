import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Features = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div>
           <div className="text-center">
            <h2 className="text-5xl">Features Jobs: {jobs.length}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nulla voluptatibus quidem dicta, eaqunima ratione consequatur aperiam dolorum facere voluptatem illum enim ducimus.</p>
           </div>
           <div className="grid grid-cols-2 gap-6
           ">
            {
                jobs.slice(0,dataLength).map(job =><Job key={job.id} job={job}></Job>)
            }
           </div>
           <div className={dataLength === jobs.length && 'hidden' }  >
            <button
            onClick={()=>setDataLength(jobs.length)} 
            className="btn btn-secondary ">Show All Data</button>
           </div>
        </div>
    );
};

export default Features;