({
    handleDiv1Click: function(component, event, helper) {
        component.set('v.isClicked1', true);
        setTimeout($A.getCallback(function() {
            component.set('v.isClicked1', false);
        }), 3000);
    },

    handleDiv2Click: function(component, event, helper) {
        component.set('v.isClicked2', true);
        setTimeout($A.getCallback(function() {
            component.set('v.isClicked2', false);
        }), 3000);
    }
})