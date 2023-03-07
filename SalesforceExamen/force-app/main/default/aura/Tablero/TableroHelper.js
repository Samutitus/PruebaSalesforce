({
    toggleDiv : function(component) {
        var divNum = Math.floor(Math.random() * 2) + 1;
        var divAuraId = "div" + divNum;
        var div = component.find(divAuraId).getElement();
        
        $A.util.addClass(div, 'green-bg');
        setTimeout(function() {
            $A.util.removeClass(div, 'green-bg');
        }, 3000);
    }
    
})
