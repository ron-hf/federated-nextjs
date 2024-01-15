import dynamic from 'next/dynamic';

const Page2 = () => {
  const App2Component = dynamic(async () => await import('app2/App2Component'), {
    ssr: false
  })
  
  return (
    <>
      <App2Component />
    </>
  );
};

export default Page2;
