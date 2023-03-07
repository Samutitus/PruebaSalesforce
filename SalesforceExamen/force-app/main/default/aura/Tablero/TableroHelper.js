({
    handleDivClick: function(component, divNum) {
        component.set('v.isClicked' + divNum, true);
        setTimeout($A.getCallback(function() {
            component.set('v.isClicked' + divNum, false);
        }), 3000);
    },
    
})
