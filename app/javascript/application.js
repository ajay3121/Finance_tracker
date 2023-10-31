// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require semantic-ui
//= require jquery
import "@hotwired/turbo-rails"
import "controllers"

$('.message .close')
    .on('click', function() {
        $(this)
            .closest('.message')
            .transition('fade')
        ;
    })
;