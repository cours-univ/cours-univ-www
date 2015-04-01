define(
[
    'jquery'
], 

function($) 
{
    var updateHeight = function updateHeight()
    {
        if ($("#menu").hasClass("hidden"))
        {
            var otherHeight = 0;
            otherHeight += $('#status-bar').height();

            var top = 0;
        }

        else
        {
            var otherHeight = 0;
            otherHeight += $('#menu').height();
            otherHeight += $('#status-bar').height();

            var top = 0;
            top += $('#menu').height();
        }

        // Redimentionner et replacer l'input et le result
        $('#input, #result').css({ 'height' : $(window).height() - otherHeight + 'px' });
        $('#input, #result').css({ 'top' : top + 'px' });
    }

    $(function()
    {
        updateHeight();
    });

    return updateHeight;
});