import React from 'react';
import Head from 'next/head'
import ReactDOM from 'react-dom/server';
import { CssBaseline } from '@nextui-org/react';
import App from './_app';

const server = (_req: any, res: any) => {
    // @ts-ignore
  const app = ReactDOM.renderToString(<App />);
  const styles = CssBaseline.flush();
  const html = ReactDOM.renderToStaticMarkup(
    <html>
      <Head>{styles}</Head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: app }} />
      </body>
    </html>
  );
  res.end('<!doctype html>' + html);
};

export default server