import dynamic from 'next/dynamic';

const App2Component = dynamic(async () => await import('app2/App2Component'), {
  ssr: false
})

const Page2 = () => {
  return (
    <>
      <App2Component />
    </>
  );
};

export default Page2;
