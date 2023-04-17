$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        autoplay: true,
        margin: 10,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    })

    $('#logo')[0].onclick = function() {
        // alert('gooing to home page')
        $('main').html(``)
        homePagePortalCall()
    }
    let x = $('.section-title-in-nav')
    for (const i of x) {
        i.onclick = function() {
            // alert('gooing to home page')
            $('main').html(``)
            homePagePortalCall()
        }
    }

    $('.order-count-wrapper')[0].onclick = function() {
        // alert('cart is clecked')
        $('main').html(``)
        cartPagePortal()
    }

    //     $('#profile-pic')[0].onclick=function(){
    //       // alert('clicked profile')
    //         $("#profile-pic").css({
    //           "transform": "translate(-50%,-50%) scale(1)",
    //           "position": "fixed",
    //           "width": "25vw",
    //           "height": "50vh",
    //           "border-radius": "15px"
    //         });
    //         $('#profile-back-screen').css({
    //           "display":"block"
    //         })
    //     }    
    //     $('#profile-back-screen')[0].onclick=function(){
    //       // alert('clicked profile')
    //         $("#profile-pic").css({
    //           "transform": "translate(0%,0%) scale(1)",
    //           "position": "relative",
    //           "border-radius": "50%",
    //           "width": "50px",
    //           "height": "50px",
    //         });
    //         $('#profile-back-screen').css({
    //           "display":"none"
    //         })
    //     }    




    function homePagePortalCall() {
        console.log('')
        $('#banner-wrapper').css({ "display": 'block' })
        $('main').html(``)
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(productList) {
            // console.log(productList);
            var main = document.getElementsByTagName("main")[0]
                // main.style.margin='0'
                // creating sections 
            var section1 = document.createElement("div")
            section1.id = 'Clothing'
            var section2 = document.createElement("div")
            section2.id = 'Accessories'

            // adding sections to main 
            main.appendChild(section1)
            main.appendChild(section2)
            main.style.fontFamily = 'Open Sans, sans-serif'

            // creating section headings
            var section1Heading = document.createElement('h2')
            var section2Heading = document.createElement('h2')

            // adding class to secion heading 
            section1Heading.classList.add('sectionsHeading')
            section2Heading.classList.add('sectionsHeading')
            var sectionsHeading = document.getElementsByClassName('sectionsHeading')

            section1Heading.appendChild(document.createTextNode('Clothing for Men and Women'))
            section2Heading.appendChild(document.createTextNode('Accessories for Men and Women'))


            document.addEventListener("DOMContentLoaded", function() {
                var sectionsHeading = document.getElementsByClassName("sectionsHeading");

                for (var i = 0; i < sectionsHeading.length; i++) {
                    sectionsHeading[i].style.opacity = '0.8'
                    sectionsHeading[i].style.fontWeight = '600'
                }
            })

            var section1CardWrapper = document.createElement('div')
            section1CardWrapper.style.display = 'flex'
            section1CardWrapper.style.flexWrap = 'wrap'
            var section2CardWrapper = document.createElement('div')
            section2CardWrapper.style.display = 'flex'
            section2CardWrapper.style.flexWrap = 'wrap'
            for (let i = 0; i < productList.length; i++) {
                createCards(productList[i])
            }

            section1.appendChild(section1Heading)
            section1.appendChild(section1CardWrapper)
            section2.appendChild(section2Heading)
            section2.appendChild(section2CardWrapper)

            section1.classList.add('sectionMargin')
            section2.classList.add('sectionMargin')

            var sectionMargin = document.getElementsByClassName('sectionMargin')

            function createCards(a) {
                // console.log(a);//------------------------------------------------------------------------------
                var card = document.createElement('div')
                card.classList.add('card-style')
                    //   console.log(card);

                card.style.boxSizing = 'borderBox'
                card.style.margin = '0 0.5% 16px 0.5%'
                card.style.boxShadow = ' 0 2px 5px #ccc'
                card.style.borderRadius = '5px'
                card.style.overflow = 'hidden'

                var cardLink = document.createElement('a')
                cardLink.style.cursor = 'pointer'

                var cardImg = document.createElement('img')
                cardImg.src = a.preview
                cardImg.style.width = '100%'

                cardLink.appendChild(cardImg)

                var cardDetails = document.createElement('div')
                    // cardDetails.style.padding='16px'
                cardDetails.style.fontFamily = "Open Sans, sans-serif"


                var cardDetails_h4 = document.createElement('h4')
                cardDetails_h4.innerText = a.name
                cardDetails_h4.style.fontWeight = '600'
                cardDetails_h4.style.margin = '0'
                cardDetails_h4.style.fontSize = '16px'


                var cardDetails_h5 = document.createElement('h5')
                cardDetails_h5.innerText = a.brand
                cardDetails_h5.style.margin = '12px 0 0 0'
                cardDetails_h5.style.fontWeight = '600'
                cardDetails_h5.style.fontSize = '13.28px'
                cardDetails_h5.style.opacity = '0.8'

                var cardDetails_p = document.createElement('p')
                cardDetails_p.innerText = 'Rs.' + a.price
                cardDetails_p.style.margin = '12px 0 0 0'
                cardDetails_p.style.fontWeight = '600'
                cardDetails_p.style.color = '#009688'

                cardDetails.appendChild(cardDetails_h4)
                cardDetails.appendChild(cardDetails_h5)
                cardDetails.appendChild(cardDetails_p)
                card.appendChild(cardLink)
                card.appendChild(cardDetails)

                if (a.isAccessory === false) {
                    section1CardWrapper.appendChild(card)
                } else if (a.isAccessory === true) {
                    section2CardWrapper.appendChild(card)
                }
                card.addEventListener('click', function() {
                    callProductPortal(a);
                })


            }
            // console.log($('.product-cards'));
        })
    }

    function callProductPortal(productData) {
        $('#banner-wrapper').css({ "display": 'none' })

        var main = document.getElementsByTagName('main')[0]
        main.innerHTML = `<section id='section-wraper'>
                <div class='left-side-wrapper'>
                    
                </div>
                <div class='right-side-wrapper'>
                    <div class='right-side-content'>
                        <h1 class='content-main-heading'>${productData.name}</h1>
                        <h4 class='brand-title'>${productData.brand}</h4>
                        <h3 class="product-price">Price: Rs <span>${productData.price}</span></h3>
                        <div class='product-description-wrapper'>
                            <h3 class="product-description-title" >Description</h3>
                            <p class="product-description">${productData.description}</p>
                        </div>
                        <div class="product-previews-wrapper">
                            <h3 class="product-preview-title">Product Preview</h3>
                            <div class='preview-cards-wrapper'>
                                
                            </div>
                        </div>
                    </div>
                    <div class="add-tocard-btn" id="${productData.id}">Add to Cart</div>
                </div>
            </section>`
        $(`#${productData.id}`)[0].onclick = function() {
            addToCart(productData)
        }


        var leftSideWrapper = document.getElementsByClassName('left-side-wrapper')[0]
        var bigImg = document.createElement('img')
        bigImg.src = productData.preview
        bigImg.className = 'left-side-img'
        leftSideWrapper.appendChild(bigImg)

        var previewCardsWrapper = document.getElementsByClassName('preview-cards-wrapper')
        var leftSideImg = document.getElementsByClassName('left-side-img')[0]
        var a = null

        for (var i = 0; i < productData.photos.length; i++) {
            imgCreate(productData.photos[i])
        }

        function imgCreate(data) {

            a = document.createElement('img');
            a.src = data
            a.className = 'preview-card'

            a.addEventListener('click', function() {
                bigImg.src = data
            })
            previewCardsWrapper[0].appendChild(a)

        }

        var temp = document.getElementsByClassName('preview-card')
        temp[0].style.border = '2px solid #009688'
        for (var i = 0; i < temp.length; i++) {
            temp[i].addEventListener('click', function(e) {
                for (var j = 0; j < temp.length; j++) {
                    temp[j].style.border = '0px solid black'
                }
                e.target.style.border = '2px solid #009688'
            })
        }
    }

    function addToCart(a) {
        // alert('addtocart function is called ')
        // console.log(a);
        var data = JSON.parse(localStorage.getItem('cartItems'))
        if (data == null) {
            // alert('your first item to cart ')
            var newobj = {
                id: a.id,
                preview: a.preview,
                cost: a.price,
                count: 1,
                name: a.name
            }
            let dataArr = [newobj]
            localStorage.setItem('cartItems', JSON.stringify(dataArr))
            updateCartCount()
        } else {
            let count = 0
            for (const i of data) {
                if (i.id == a.id) {
                    // alert(i.id)
                    count = 1
                        // i.preview=a.preview
                        // i.cost=a.price
                    i.count += 1
                }
            }
            if (count == 1) {

                localStorage.setItem('cartItems', JSON.stringify(data))
                updateCartCount()
                return
            }
            var newobj2 = {
                id: a.id,
                preview: a.preview,
                cost: a.price,
                count: 1
            }
            data.push(newobj2)
            localStorage.setItem('cartItems', JSON.stringify(data))
                // alert('new product ')
            updateCartCount()
        }

    }

    function updateCartCount() {
        // alert('updating cart')
        let data = JSON.parse(localStorage.getItem('cartItems'))
            // console.log(data);
        let temp = 0
        if (data != null) {
            for (const i of data) {
                temp += i.count
            }
        }
        if (temp == 0) {
            temp = 'O'
        }
        // alert(temp)
        $('.orders-count').text(`${temp}`)
    }

    function cartPagePortal() {
        // 
        $('#banner-wrapper').css({ "display": 'none' })
        let data = JSON.parse(localStorage.getItem('cartItems'))
        if (data == null) {
            data = []
        }
        // console.log(typeof data)
        // console.log(data)
        $('main').html(`<div class="cart-section-wrapper">
            <h1 class="cart-section-main-heading">Checkout</h1>
            <div class='cart-section-div'>
                <div class="cart-section-left-section">
                    <h2 class="cart-section-left-section-title">Total Items: ${data.length}</h2>
                    <div id="cart-items-wrapper">
                    </div>
                </div>
                <div class="cart-section-right-section">
                    <h3 class='cart-section-right-section-title'>Total Amount</h3>
                    <p>
                        Amount: Rs <span class="total-bill">0</span>
                    </p>
                    <button id="place-order-btn">Place order</button>
                </div>
            </div>
        </div>`)


        $('#place-order-btn')[0].onclick = function() {
            // alert('processing.....')

            $('main').html(`<section id="order-placed-section">
            <div>
                <i class="fas fa-check-circle"><div id="click-animation"></div></i>
                <h3>Order Placed Successfully!!</h3>
                <p>We have sent you an email with the order details </p>    
            </div>
        </section>`)
            localStorage.removeItem('cartItems');
            // alert('localstorage is cleared ')
            updateCartCount()
                // alert('updateCartCount function is called')

        }
        let temp = 0

        if (data != null) {
            for (const i of data) {
                $('#cart-items-wrapper').append(`<div class='cart-item'>
                <div>
                    <img src=${i.preview} alt="preview card" class="cart-item-img">
                </div>
                <div>
                    <h4>${i.name}</h4>
                    <p>x${i.count}</p>
                    <p>
                        <span>Amount: Rs</span>
                        <span>${i.cost*i.count}</span>
                    </p>
                </div>
             </div> `)
                temp += (i.cost * i.count)
            }
        }
        $('.total-bill').text(`${temp}`)

    }

    homePagePortalCall()
    updateCartCount()

})