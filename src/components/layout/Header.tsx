import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">FreelancePlatform</Link>
        <div>
          <Link href="/jobs" className="mr-4">Jobs</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header