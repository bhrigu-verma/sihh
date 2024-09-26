const ClientDashboard: React.FC = () => {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Client Dashboard</h1>
        <section>
          <h2 className="text-xl font-semibold">My Job Postings</h2>
          {/* Add JobList component here */}
        </section>
        <section>
          <h2 className="text-xl font-semibold">Received Proposals</h2>
          {/* Add ProposalList component here */}
        </section>
      </div>
    )
  }
  
  export default ClientDashboard