import Document, { Html, Head, Main, NextScript } from 'next/document';
import { revalidate, FlushedChunks, flushChunks }from '@module-federation/nextjs-mf/utils';

class myDocument extends Document {
  static chunks = undefined
  
  static getInitialProps= async(ctx: any) => {
    if(process.env.NODE_ENV === "development" && !ctx.req?.url?.includes("_next")) {
      await revalidate().then((shouldReload) =>{
        if (shouldReload) {
          ctx.res?.writeHead(302, { Location: ctx.req.url });
          ctx.res?.end();
        }
      });
    } else {
      ctx?.res?.on("finish", () => {
        revalidate()
      });
    }
    myDocument.chunks = await flushChunks()

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      chunks: myDocument.chunks
    };
  }
  
  render() {

    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default myDocument;