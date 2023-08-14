import i18next from 'i18next';

i18next.init({
    fallbackLng : 'kr',
    fallbackNS : 'common',
    lng : 'kr',
    resources : {
        kr : {
            translation : {
                length : "{{count, number(minimumFractionDigits : 3)}}cm",
                best : "it is {{how, uppercase}}"
            },
        },
    }
})

i18next.services.formatter.add('uppercase', (value, lng,options) => {
    return value.toUpperCase();
})

const ret = i18next.t('length', {count : 100.1234});
console.log(ret);
const ret2 = i18next.t('best', {how : 'good'});
console.log(ret2)