import Jobcard from "../jobcard/Jobcard";
const Active = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        {props.jobs.map((job) => {
          return <Jobcard staus="active" data={job} />;
        })}
      </div>
    </div>
  );
};
export default Active;
