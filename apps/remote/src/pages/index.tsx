import dynamic from 'next/dynamic';


export function Page() {
  const Dashboard = dynamic(async () => await import('../../components/Dashboard/Dashboard'), { ssr: false });
  return (
    <>
      <h1>Page in remote</h1>
      {(typeof window !== 'undefined') && <Dashboard />}
    </>
  )
}

export default Page;