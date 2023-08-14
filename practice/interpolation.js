import i18next from 'i18next';

i18next.init({
    fallbackLng : 'kr',
    fallbackNS : 'common',
    lng : 'kr',
    resources : {
        kr : {
            translation : {
                key : "{{what}}는 {{how}}"
            },
        },
        

    }
})

let ret = i18next.t('key', {what : 'i18next', how: '좋다.'});
console.log(ret);
ret = i18next.t('key', {what : 'i18next', how: '<i>좋다.</i>', interpolation : {escapeValue : false}});
console.log(ret);