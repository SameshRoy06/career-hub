
const getStoreJobApplication = () => {
    const stroreJobApplicaton = localStorage.getItem('job-application')
  if(stroreJobApplicaton) {
    return JSON.parse(stroreJobApplicaton);
  }
  return [];
}









const saveJobApplication = id => {
const stroreJobApplicaton = getStoreJobApplication();
const exist = stroreJobApplicaton.find(jobId => jobId === id)
if(!exist){
    stroreJobApplicaton.push(id);
    localStorage.setItem('job-application', JSON.stringify(stroreJobApplicaton));
}
    
}
export {getStoreJobApplication,saveJobApplication};
