sap.ui.define([
  "com/otisoft/favs/Favorites/controller/BaseController"
], function (BaseController,
  URLHelper) {
  "use strict";

  return BaseController.extend("com.otisoft.favs.Favorites.controller.MainView", {
    /**
     * @override
     */
    onInit: function () {
      //this.getView().setModel(this.getOwnerComponent().getModel("favorites"), "favorites");


    },
    onPress: function (sUrl) {
      sap.m.URLHelper.redirect(sUrl, true);
    }
  });
});