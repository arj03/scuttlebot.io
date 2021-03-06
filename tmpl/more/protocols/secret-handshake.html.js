var page = require('../../page.part')
module.exports = () => page({
  title: 'Secret Handshake',
  section: 'more',
  tab: 'more-protocols',
  path: '/more/protocols/secret-handshake.html',
  content: `
    <h2>Secret Handshake</h1>
    <p>
      Secret Handshake is an encrypted channel protocol based on a mutually authenticating key agreement handshake, with forward secure identity metadata.
      It&#39;s used by Scuttlebot to authenticate and encrypt peer connections.
    </p>
    <p><a href="./shs.pdf">Read the White Paper</a></p>
  `,
  next: ['/more/protocols/private-box.html', 'Private Box']
})