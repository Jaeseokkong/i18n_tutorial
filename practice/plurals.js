import i18next from 'i18next';

i18next.init({
    fallbackLng : 'kr',
    fallbackNS : 'common',
    lng : 'kr',
    resources : {
        kr : {
            translation : {
                cake_one : "케이크",
                cake_other : "{{count}}개의 케이크",
                cake_zero : "케이크 없음"
            },
        },
        

    }
})

const ret = i18next.t('cake', {count : 0});
console.log(ret);
const ret2 = i18next.t('cake', {count : 3});
console.log(ret2);