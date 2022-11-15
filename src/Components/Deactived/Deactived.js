import Jobcard from "../jobcard/Jobcard";
const Deactivated = (props) => {
  return (
    <div>
      <div>
        {props.jobs.length > 0
          ? props.jobs.map((job) => {
            return <Jobcard staus="Deactivated" data={job} />;
          })
          : "No jobs found!"}

      </div>
    </div>
  );
};
export default Deactivated;
