import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* latin */
          @font-face {
            font-family: 'Graphik';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/Graphik-Regular-Web.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Graphik';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/Graphik-Medium-Web.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Graphik';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(${
            asset("/fonts/Graphik-Semibold-Web.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin-ext */
          @font-face {
            font-family: 'nantes';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/NantesWeb-Regular.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }

          /* latin-ext */
          @font-face {
            font-family: 'nantes';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(${asset("/fonts/NantesWeb-Book.woff2")}) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
