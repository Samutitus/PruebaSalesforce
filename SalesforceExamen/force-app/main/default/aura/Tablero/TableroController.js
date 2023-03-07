({
    init: function(component, event, helper) {
        component.set('v.isClicked1', false);
        component.set('v.isClicked2', false);
    },
    handleButton1Click : function(component, event, helper) {
        helper.toggleDiv(component);
    }
})
