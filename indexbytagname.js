(function($) {
    $.fn.indexByTagname = function() {
        $el = $(this)
        $node = $el[0].tagName
        $counter = 0;
        $.each($el.parent().children(), function(k, v){
            if(v.tagName == $node) {
                if(v == $el[0]) {
                    return false;
                } else {
                    $counter++;
                }
            }
        })
        return $counter;
      }
    })($);
