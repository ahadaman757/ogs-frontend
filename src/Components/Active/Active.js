import Jobcard from '../jobcard/Jobcard';
const Active = (props) => {
  console.log('active');
  console.log(props);
  return (
    <div>
      <div>
        {props.jobs.length > 0
          ? props.jobs.map((job) => {
              return (
                <Jobcard
                  staus={`${
                    job.is_approved == 0 ? 'Pending Approval' : 'Active'
                  }`}
                  data={job}
                />
              );
            })
          : 'No jobs found!'}
      </div>
    </div>
  );
};
export default Active;
