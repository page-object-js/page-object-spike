var getBrowser  = require('../browser').getInstance,
    locateBy    = require('../locateBy');

module.exports = function(locator) {
    this.visible = function() {
        return getBrowser().isElementPresent(locateBy(locator));
    };

    this.isEnabled = function() {
        return getBrowser().findElement(locateBy(locator)).isEnabled();
    };

    this.click = function() {
        return getBrowser().findElement(locateBy(locator)).click();
    };

    return this;
};
