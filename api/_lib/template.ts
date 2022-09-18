export function getHtml(percentage: number) {
    return `<html><head>
    <link rel="icon" href="/favicon.png">
    <title>Umbrel outdated apps count</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>    html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        color: white;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
  
      body {
        background: url("https://unsplash.com/photos/JUFuI-kBtas/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYxMDgyNDEy&force=true");
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
      }
  
      main {
        height: 100%;
        position: relative;
      }
  
      .update-count {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
      }
  
      #updateCount {
        font-size: 8rem;
        line-height: 9rem;
      }
  
    </style>
    
  </head>
  
  <body class="">
    <main class="container">
      <p class="update-count">
        <span id="updateCount">${percentage}%</span> of the apps available on Umbrel are outdated.
      </p>
      
    </main>
  </body></html>`;
}
