/**
* Funzione per l'ottenimento dei documenti collegati ad un VID tramite API
* @param {string} vid - Identificativo SBN Autore
* @param {string} [endpoint="opac.sbn.it"] - opzionale
* @returns {Object|null} - Ritorna una stringa o null
*/

const getOpacAuthorDetails = async (vid, endpoint = "opac.sbn.it") => {

    try {

        // Parametri URL
        const params = new URLSearchParams({
            core: "autori",
            id: `ITICCU${vid}`,
            page: 1
        })

        let url = `https://${endpoint}/o/opac-api/title?${params.toString()}`
        const response = await fetch(url); 
        const json = await response.json();
        const data = json.data.results[0]

        let obj = {
            id: data.id.trim(),
            title: data.title.trim(),
            type: data.pretitle.trim()
        }

        data.contents[0].body.forEach(element => {

            let key = (element[0].value).trim()
            let value = ""
            if (element[1]?.contents) {
                element[1]?.contents.forEach((subvalue) => {
                    value += (subvalue.value).trim() + "\n"
                })
            } else if (element[1]?.values) {
                value = element[1].values[0].value
            } else {
                value = element[1].value
            }

            obj[key] = value.trim()

        });

        return obj

    } catch (error) {
        console.log(error)
        return null
    }

}

export { getOpacAuthorDetails };
