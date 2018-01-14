importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "6f2c6888e9f517bf8389b3622a5fcea7"
  },
  {
    "url": "app/app-61b795aeab.js",
    "revision": "61b795aeab46a22fab4120efa2440a3a"
  },
  {
    "url": "app/vendor-f3aa146537.js",
    "revision": "f3aa14653755e031fbecffdff6c06325"
  },
  {
    "url": "content/css/main-0ef33e80e9.css",
    "revision": "87186475f1f99666cc51a1955410787f"
  },
  {
    "url": "content/css/vendor-fa067b3208.css",
    "revision": "28e1bc4e4214d3423667fb06a414beb0"
  },
  {
    "url": "content/fonts/glyphicons-halflings-regular-8988968814.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "content/images/arsenal-chelsea-77191d7b71.jpg",
    "revision": "77191d7b716e9c05003eccfb1ab69d41"
  },
  {
    "url": "content/images/brigthon-burn-337eae1e5b.jpg",
    "revision": "337eae1e5b92fb9724647bc720bbf5f9"
  },
  {
    "url": "content/images/chelseavsarseanl-54db9ce3ec.jpg",
    "revision": "54db9ce3ec9fd82bbcb96127d9177424"
  },
  {
    "url": "content/images/everton-manchesterunited-7b8363d961.jpg",
    "revision": "7b8363d961efd7c42ae7d21b77495b18"
  },
  {
    "url": "content/images/football-background-03a0b7bab3.jpg",
    "revision": "03a0b7bab339da19261d6bcc815a450d"
  },
  {
    "url": "content/images/leicestercity-huddersfieldtown-e39287e009.jpg",
    "revision": "e39287e009cc6d48c716df29986c57b9"
  },
  {
    "url": "content/images/list-icon-a7307f1ecc.jpg",
    "revision": "a7307f1ecc81cb6de0bcaf39d0277df1"
  },
  {
    "url": "content/images/manchesterunited-watford-797b376463.jpg",
    "revision": "797b3764639eafaa22c13fc8126c9019"
  },
  {
    "url": "content/images/mdb-bf14f645e5.png",
    "revision": "bf14f645e5df5f000e7fbe9e6cc0c65b"
  },
  {
    "url": "content/images/overlays/01-3888ecc030.png",
    "revision": "3888ecc03086ee849014409a07864ba6"
  },
  {
    "url": "content/images/overlays/02-06cefc0cc8.png",
    "revision": "06cefc0cc8bd642ccdd3135e650197dd"
  },
  {
    "url": "content/images/overlays/03-0a1396ef34.png",
    "revision": "0a1396ef34d321f8c447c68c5056fc1f"
  },
  {
    "url": "content/images/overlays/04-51f1b9c3e2.png",
    "revision": "51f1b9c3e256a651da5cf5dfe8204461"
  },
  {
    "url": "content/images/overlays/05-acb4b13ad6.png",
    "revision": "acb4b13ad6bf258c24daa53e9ca2f747"
  },
  {
    "url": "content/images/overlays/06-e25cdb8cfc.png",
    "revision": "e25cdb8cfc9019880c36c107d92e6f38"
  },
  {
    "url": "content/images/overlays/07-d7874b3604.png",
    "revision": "d7874b3604b242cc9945c3d652c80d87"
  },
  {
    "url": "content/images/overlays/08-b85f136c7d.png",
    "revision": "b85f136c7dbbd034469077f99a31019d"
  },
  {
    "url": "content/images/overlays/09-a67596aabd.png",
    "revision": "a67596aabdbed532dab23829db04495b"
  },
  {
    "url": "content/images/southampton-crystalpalace-7068b35818.jpg",
    "revision": "7068b35818eb9f781dbf4ad7fa45ecbd"
  },
  {
    "url": "content/images/stokecity-newcastle-f58a13ab52.jpg",
    "revision": "f58a13ab52d644ac12f2b0e38741aaca"
  },
  {
    "url": "content/images/swansea-tottenham-90649e5743.jpg",
    "revision": "90649e5743790d438250c36201cc81db"
  },
  {
    "url": "content/images/westham-westbrom-382a9930f3.jpg",
    "revision": "382a9930f3c04325042cd3bcf3c7e1d3"
  },
  {
    "url": "content/js/mdb.min.js",
    "revision": "a12f7c861cbe197a21a7b39f0d1b0b5e"
  },
  {
    "url": "index.html",
    "revision": "e821768c26930261b2065bdef7bb33b5"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
