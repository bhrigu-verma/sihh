interface JobCardProps {
    job: {
      id: string;
      title: string;
      description: string;
      budget: number;
    };
  }
  
  const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
      <div className="border p-4 rounded">
        <h3 className="font-semibold">{job.title}</h3>
        <p>{job.description}</p>
        <p className="mt-2">Budget: ${job.budget}</p>
      </div>
    )
  }
  
  export default JobCard