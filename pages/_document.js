import Document, {Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class BorsettaDocument extends Document {
  static getInitialProps({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return {html, head, errorHtml, chunks, styles}
  }

  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" crossOrigin="anonymous" />
          */}
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"  crossOrigin="anonymous"></script> 
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />

          {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
          <link rel="shortcut icon" href="../favicon.ico" />
          <link rel="apple-touch-icon" href="apple-icon.png"/>

          <link rel="stylesheet" href="static/assets/css/normalize.css"/>
          <link rel="stylesheet" href="static/assets/css/bootstrap.min.css"/>
          {/* <link rel="stylesheet" href="static/assets/css/font-awesome.min.css"/> */}
          <link rel="stylesheet" href="static/assets/css/themify-icons.css"/>
          <link rel="stylesheet" href="static/assets/css/flag-icon.min.css"/>
          <link rel="stylesheet" href="static/assets/css/cs-skin-elastic.css"/>
          <link rel="stylesheet" href="static/css/borsetta.css"/>
          
          <link rel="stylesheet" href="static/assets/scss/style.css"/>
          <link href="static/assets/css/lib/vector-map/jqvmap.min.css" rel="stylesheet"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"/>
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css"></link>
        </Head>
        <body>
          <Main />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" crossOrigin="anonymous"></script>
          <script src="/static/assets/js/vendor/jquery-2.1.4.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
          <script src="/static/assets/js/plugins.js"></script>
          <script src="/static/assets/js/main.js"></script>


          <script src="/static/assets/js/lib/chart-js/Chart.bundle.js"></script>
          <script src="/static/assets/js/dashboard.js"></script>
          <script src="/static/assets/js/widgets.js"></script>
          <script src="/static/assets/js/lib/vector-map/jquery.vmap.js"></script>
          <script src="/static/assets/js/lib/vector-map/jquery.vmap.min.js"></script>
          <script src="/static/assets/js/lib/vector-map/jquery.vmap.sampledata.js"></script>
          <script src="/static/assets/js/lib/vector-map/country/jquery.vmap.world.js"></script>
          
          <NextScript />
        </body>
      </html>
    )
  }
}