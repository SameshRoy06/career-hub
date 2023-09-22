import { GrLocation } from 'react-icons/gr';
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary } = job;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={logo}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold text-violet-500 border rounded border-pink-400 mr-4 ">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold text-violet-500 border rounded border-pink-400 mr-4 ">{job_type}</button>
                </div>
                <div className='mt-4 flex'>
                    <h2 className='flex mr-4 '><GrLocation className='text-2xl mr-2'></GrLocation>{location}</h2>
                    <h2 className='flex mr-4'><HiOutlineCurrencyDollar className='text-2xl mr-2'></HiOutlineCurrencyDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                
                <Link to={`/job/${id}`} className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">
                    View Details
                </Link>
                </div>
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object
}
export default Job;