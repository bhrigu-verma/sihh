interface Job {
    id: string;
    title: string;
    description: string;
  }
  
  interface JobListProps {
    jobs: Job[];
  }
  
  const JobList: React.FC<JobListProps> = ({ jobs }) => {
    return (
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 rounded">
            <h3 className="font-semibold">{job.title}</h3>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    )
  }
  
  export default JobList