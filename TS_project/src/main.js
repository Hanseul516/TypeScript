"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/style.css");
var FullList_1 = require("./model/FullList");
var ListItem_1 = require("./model/ListItem");
var ListTemplate_1 = require("./templates/ListTemplate");
var initApp = function () {
    var fullList = FullList_1.default.instance;
    var template = ListTemplate_1.default.instance;
    var itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = document.getElementById("newItem");
        var newEntryText = input.value.trim();
        if (!newEntryText.length)
            return;
        var itemId = fullList.list.length
            ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
            : 1;
        var newItem = new ListItem_1.default(itemId.toString(), newEntryText);
        fullList.addItem(newItem);
        template.render(fullList);
        input.value = "";
    });
    var clearItems = document.getElementById("clearItemsButton");
    clearItems.addEventListener('click', function () {
        fullList.clearList();
        template.clear();
    });
    fullList.load();
    template.render(fullList);
};
document.addEventListener("DOMContentLoaded", initApp);
