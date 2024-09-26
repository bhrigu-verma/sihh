const AdminDashboard: React.FC = () => {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <section>
          <h2 className="text-xl font-semibold">User Management</h2>
          {/* Add UserList component here */}
        </section>
        <section>
          <h2 className="text-xl font-semibold">Job Moderation</h2>
          {/* Add JobList component with moderation controls */}
        </section>
      </div>
    )
  }
  
  export default AdminDashboard
  