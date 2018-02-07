
(function(global, $, UI){

    var Toggle = function(element, options) {

        var $this = this, $element = $(element);

        if($element.data("toggle")) return;

        this.options  = $.extend({}, this.options, options);
        this.totoggle = this.options.toggle ? $(this.options.toggle):[];
        this.element  = $element.on("click", function(e) {
            e.preventDefault();
            $this.toggle();
        });

        this.element.data("toggle", this);
    };

    $.extend(Toggle.prototype, {

        options: {
            toggle: false,
            toggleclass: 'uk-hidden'
        },

        toggle: function() {

            if(!this.totoggle.length) return;

            this.totoggle.toggleClass(this.options.toggleclass);
        }
    });

    UI["toggle"] = Toggle;

    $(document).on("click.toggle.uikit", "[data-uk-toggle]", function(e) {
        var ele = $(this);

        if (!ele.data("toggle")) {
           var obj = new Toggle(ele, UI.Utils.options(ele.attr("data-uk-toggle")));
           ele.trigger("click");
        }
    });

})(this, jQuery, jQuery.UIkit);