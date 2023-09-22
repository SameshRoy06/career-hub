import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../LocalStorage/LocalStorage";


const Applied = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [dispayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJob);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite'){
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(onsiteJobs);
        }
    }



    useEffect(() => {
        const storedJobIds = getStoreJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJob(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [])
    return (
        <div className="border border-spacing-3 bg-gray-100">
            <h2 className="text-2xl">I am a job applied : {appliedJob.length}</h2>
            <div className="dropdown bg-pink-400">
                <label tabIndex={0} className="btn m-1 b bg-pink-400">Click</label>
                <ul tabIndex={0} className="bg-pink-400 dropdown-content z-[1] menu p-2 shadow   rounded-box w-52">
                    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </div>

            <ul>
                {
                    dispayJobs.map(job => <li key={job.id}>
                       <span> {job.job_title} <br />
                        {job.company_name} <br />
                        {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Applied;