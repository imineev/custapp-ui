define([
    'ojs/ojcore', 
    'knockout'
], function(oj, ko) {

    var lgQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP);
    var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
    var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_UP);
    var smOnlyQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);

    var browser = {
        screenRange: oj.ResponsiveKnockoutUtils.createScreenRangeObservable(),
        large: oj.ResponsiveKnockoutUtils.createMediaQueryObservable(lgQuery),
        medium: oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery),
        small: oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery),
        smallOnly: oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smOnlyQuery)
    };

    return browser;   

});
