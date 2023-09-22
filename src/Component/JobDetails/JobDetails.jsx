import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../LocalStorage/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleJobApply = () =>{
        saveJobApplication(idInt);
        toast('You have successfully done')

    }

    return (
             <div>
            <h1>Jobs Details: {job.id}</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl text-center">Details Coming Here</h2>
                    <img src={job.logo} alt="" />
                    <p>{job.category_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-4xl p-4 text-center">Site Things</h2>
                    <button onClick={handleJobApply} className="btn btn-primary w-full p-4">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
JobDetails.propTypes = {
    jobs: PropTypes.object
}

export default JobDetails;
