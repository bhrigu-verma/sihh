interface Proposal {
    id: string;
    jobTitle: string;
    freelancerName: string;
    bidAmount: number;
  }
  
  interface ProposalListProps {
    proposals: Proposal[];
  }
  
  const ProposalList: React.FC<ProposalListProps> = ({ proposals }) => {
    return (
      <ul className="space-y-4">
        {proposals.map((proposal) => (
          <li key={proposal.id} className="border p-4 rounded">
            <h3 className="font-semibold">{proposal.jobTitle}</h3>
            <p>Freelancer: {proposal.freelancerName}</p>
            <p>Bid: ${proposal.bidAmount}</p>
          </li>
        ))}
      </ul>
    )
  }
  
  export default ProposalList