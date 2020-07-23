// FIXED ANCHORE TO NAVEGATION BETWEEN SECTIONS
// ROW NEEDS A CLASS .section AND A SINGLE #id

jQuery('ready', function($){

    var sections = jQuery('.section'),
    arrowButton = jQuery('.next-section-wrapper'),
	windowHeight = parseInt(jQuery(window).height());
	
    // GET ALL ID'S ELEMENTS(ROWS) WITH CLASS SECTION
    var ids = sections.map(function(index) {
        return this.id; 
    });

    // GET ALL OFFSET TOP OF ELEMENTS(ROWS) WITH CLASS SECTION
    var offsets = sections.map(function(index) {
        return this.offsetTop; 
    });
	
	// GET ALL OFFSET HEIGHT OF ELEMENTS(ROWS) WITH CLASS SECTION
	var sectionHeights = sections.map(function(index) {
        return this.offsetHeight; 
    });

    // ON WINDOW SCROLL AND IF THERE ARE ELEMENTS WITH CLASS SECTION
    jQuery(window).scroll(function(){
        if(sections.length != 0) {
            arrowOnScroll(sections, ids, offsets, sectionHeights, arrowButton, windowHeight);
        } else {
            console.log('Falta añadir la clase section a una de las filas');
        }
    });
})


function arrowOnScroll(sections, ids, offsets, sectionHeights, arrowButton, windowHeight) {
       
        let st = jQuery(this).scrollTop();

        sections.each(function(index){
            let that = jQuery(this),
				offsetElement = offsets[index] - sectionHeights[index]/2,
                offsetLastElement =  offsets[sections.length - 1] - parseInt(jQuery(window).height()/1.5);
				//console.log(offsetLastElement);
              
                // SCROLL WINDOW IS GREATER THAN OFFSETELEMENT AND SMALLER THAN LASTELEMENT
                if(st > offsetElement && st < offsetLastElement) {
                    arrowButton.removeClass('rotate-up');
                    arrowButton.attr("href", `#${ids[index + 1]}`);
                    console.log(arrowButton.attr("href"));
                } else if (st > offsetLastElement) {
                    arrowButton.addClass('rotate-up');
                    arrowButton.attr("href", `#${ids[0]}`);
                    //console.log('no hay mas secciones');
                }
              
        });  
    
}