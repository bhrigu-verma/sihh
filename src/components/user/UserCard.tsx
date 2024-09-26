interface UserCardProps {
    user: {
      name: string;
      role: string;
      rating: number;
    };
  }
  
  const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
      <div className="border p-4 rounded">
        <h3 className="font-semibold">{user.name}</h3>
        <p>{user.role}</p>
        <p>Rating: {user.rating}/5</p>
      </div>
    )
  }
  
  export default UserCard