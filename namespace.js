i18next.init({
    fallbackLng : 'en',
    lng : 'en',
    resources : {
        en : {
            translation : {
                key : 'hello world',
                look : {
                    deeper : 'some deep key'
                },
                error : {
                    404 : "Not found!",
                    unknown : "Some strange thing happened"
                }
            },
            common: {
                save : "Save",
              	cancel : "Cancel"
            }
        },
        kr : {
            translation : {
                key : '안녕'
            },
            common: {
                save : '저장'
            }
        }

    }
})
const code = 404;
const ret = i18next.t([`error.${code}`, 'error.unknown']);
console.log(ret);