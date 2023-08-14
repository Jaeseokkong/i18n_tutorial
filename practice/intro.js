import i18next from 'i18next';

i18next.init({
    //debug : true,
    lng : 'en',
    resources : {
        en : {
            translation : {
                key : 'hello world',
              	look : {
              		deeper : "some deep key"
            	}
            }
        },
        kr : {
            translation : {
                key : '안녕'
            }
        }

    }
})
console.log(i18next.t("key"))