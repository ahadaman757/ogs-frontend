import Jobcard from "../jobcard/Jobcard";
const Deactivated = (props) => {
  return (
    <div>
      <div>
        {props.jobs[0].id !== null
          ? props.jobs.map((job) => {
            return <Jobcard staus="Deactivated" data={job} />;
          })
          : "No jobs found!"}

      </div>
    </div>
  );
};
export default Deactivated;
