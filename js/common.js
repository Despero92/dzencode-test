$(document).ready(function(){function e(){$(".hamburger").click(function(e){$(this).toggleClass("is-active"),e.preventDefault(),r.slideToggle()})}function n(){function e(e,n,r){var s=e.value,t=e.name,a=document.createElement("span");a.className="error",a.innerHTML=r,i=e.parentNode.getElementsByClassName("error"),"name"===t&&s.length>2&&s.length<21?n.test(s)?(e.classList.remove("denied"),e.classList.add("granted"),i[0]&&i[0].remove()):(e.classList.remove("granted"),e.classList.add("denied"),3!==e.previousSibling.nodeType&&"error"===e.previousSibling.className||(i[0]&&i[0].remove(),e.parentNode.insertBefore(a,e.nextSibling),errors.push(i[0]))):"phone"===t&&s.length>3&&s.length<14?n.test(s)?(e.classList.remove("denied"),e.classList.add("granted"),i[0]&&i[0].remove()):(e.classList.remove("granted"),e.classList.add("denied"),3!==e.previousSibling.nodeType&&"error"===e.previousSibling.className||(i[0]&&i[0].remove(),e.parentNode.insertBefore(a,e.nextSibling),errors.push(i[0]))):(e.classList.remove("granted"),e.classList.add("denied"),3!==e.previousSibling.nodeType&&"error"===e.previousSibling.className||(a.className="error",a.innerHTML=r,i[0]||(e.parentNode.insertBefore(a,e.nextSibling),errors.push(i[0]))))}function n(){e(this,/^[A-ZА-ЯЁ]{0,1}[a-zA-Zа-яёА-ЯЁ\s\-]+$/," Incorrect name ")}function r(){e(this,/((\+{0,1}\d{0,2})?\s{0,1}(\({0,1}(\d{0,3})\){0,1}))?((\d{3}\-{0,1})?(\s{0,1}))?\d{0,3}\-{0,1}\d{2}\-{0,1}\d{2,4}/," Incorrect phone ")}var s=document.forms.form,t=s.elements.name,a=s.elements.phone;t&&(t.onchange=n),a&&(a.onchange=r)}e();var r=$("#nav").find("ul");$(".popup").magnificPopup({closeOnContentClick:!0,closeBtnInside:!1}),new Swiper("#box-slider",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev"}),new Swiper("#block-slider",{pagination:".swiper-pagination",paginationClickable:!0,direction:"vertical"}),$(".button-buy").hover(function(){var e=$(this).parent().parent().find(".price");$(this).hasClass("price-hover")?($(this).removeClass("price-hover"),e.removeClass("price-hover")):($(this).addClass("price-hover"),e.addClass("price-hover"))}),$("a[href*='#']").mPageScroll2id(),$("#nav").find("li a").click(function(){$("#nav li a").removeClass("active"),$(this).addClass("active")});var i;$("#form").change(function(){n()}),$("#form").submit(function(){return i.length<1})});