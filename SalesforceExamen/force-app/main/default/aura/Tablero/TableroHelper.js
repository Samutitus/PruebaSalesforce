({
    toggleDiv : function(component) {
        var isClicked = component.get('v.isClicked1');
        var divNum = Math.floor(Math.random() * 2) + 1;
        component.set('v.isClicked' + divNum, true);
        setTimeout($A.getCallback(function() {
            component.set('v.isClicked' + divNum, false);
        }), 3000);
    }
    
})
