const FreelancerDashboard: React.FC = () => {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Freelancer Dashboard</h1>
        <section>
          <h2 className="text-xl font-semibold">Active Jobs</h2>
          {/* Add JobList component here */}
        </section>
        <section>
          <h2 className="text-xl font-semibold">Proposals Sent</h2>
          {/* Add ProposalList component here */}
        </section>
      </div>
    )
  }
  
  export default FreelancerDashboard