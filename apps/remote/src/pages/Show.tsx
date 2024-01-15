import dynamic from 'next/dynamic';
import { Shows } from '../app/components/Shows'; 


export function Page() {
  return (
    <>
      <h1>Page in remote</h1>
      <Shows />
    </>
  )
}

export default Page;