import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '../components/MainLayout/Sidebar';
import themes from '../themes';
 
export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    if (!window) return

    const path = window.location
    if (path?.pathname === '' || path?.pathname === '/')
      router.push('/App1')
  }, [router]);
  
  return (
    <ThemeProvider theme={themes}>
      <Sidebar/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}