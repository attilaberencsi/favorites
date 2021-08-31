/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/otisoft/favs/Favorites/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
