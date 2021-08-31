sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.otisoft.favs.Favorites.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.otisoft.favs.Favorites",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
