import i18next from 'i18next';

i18next.init({
    fallbackLng : 'kr',
    fallbackNS : 'common',
    lng : 'kr',
    resources : {
        kr : {
            translation : {
                chicken_seasoned : "양념치킨을 좋아한다.",
                chicken_fried : "후라이드치킨을 좋아한다.",
                chicken : "모든 치킨을 좋아한다."
            },
        },
    }
})

let ret = i18next.t('chicken', {context : 'seasoned'});
console.log(ret);
ret = i18next.t('chicken', {context : 'fried'});
console.log(ret);
ret = i18next.t('chicken', {context : 'whatever'});
console.log(ret);
