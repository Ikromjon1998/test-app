const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    timeout: 20000,

    env: {
        BASE_URL: 'https://care-stage.iubh.de/#/admin/profil.php?id=10483514&tab=fibu',
        USERNAME: 'i.ochilov',
        PASSWORD: 'gmr.dwd.vmr9fuw9AFC'
    }
});

