const accentMap:any = { 'á': 'a', 'é': 'e', 'è': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u' }


export const removeAccents = (e:string) => {
   
    let ret = '';

    for (let i = 0; i < e?.length; i++) {
        ret += accentMap[e.charAt(i)] || e.charAt(i);
    }

    return ret.toLowerCase()

}