# getOpacAuthorDetails
Funzione per l'ottenimento delle informazioni di dettaglio su un autore SBN tramite API


## Importazione


### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME `application/javascript`, l'URL segue il formato `https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>`

```
import { getOpacAuthorDetails } from 'https://cdn.jsdelivr.net/gh/labaib/getOpacAuthorDetails@main/index.js';
```

> Pro: aggiornamento automatico; Contro: pagina carica più lentamente 

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
import { getOpacAuthorDetails } from './js/getOpacAuthorDetails.js';
```

> Pro: più veloce; Contro: aggiornamento manuale 


## Esempi

```
<script type="module">
        
 import { getOpacAuthorDetails } from 'https://cdn.jsdelivr.net/gh/labaib/getOpacAuthorDetails@main/index.js';

 (async () => {
     const details = await getOpacAuthorDetails("CFIV008732");
 })();

</script>
```
```
<script type="module">
        
  import { searchOpacNamesByLabel } from './js/searchOpacNamesByLabel.js';

  (async () => {
    const details = await getOpacAuthorDetails("CFIV008732");
  })();

</script>
```
