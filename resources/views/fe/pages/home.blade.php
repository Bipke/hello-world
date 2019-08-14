
<!DOCTYPE html>
<html lang="en">
  
  @include('fe.partials.head')

<body id="top-fx" data-spy="scroll" data-target="#navbar">
	
	
	@include('fe.partials.header')

	 <!-- main background -->
	 <div class="bg-main">
    </div>
    <!-- pjax container -->
    <div id="pjax-container">
        <div class="home-content p_scroll">
            <!-- LOGO -->
            <div class="logo">
                <a href="home.html"><img src="assets/img/logo.svg" alt="logo"></a>
            </div>
            <!-- HOME PAGE-->
            <div class="home-page">
                <div class="home-img">
                    <div class="intro-text">
                        <h1 class="left-text">Polaris Template</h1>
                        <div class="header-block-txt">
                            <h5>Sed nibh neque, imperdiet ac magna mattis,<br> fringilla vulputate erat</h5>
                            <p>Fusce facilisis erat ornare, posuere elit non, vestibulum augue. Aliquam auctor dictum orci sit amet placerat.Quisque faucibus massa a ipsum porta, vitae ultrices felis varius.Aliquam auctor dictum orci sit amet placerat</p>
                            <a href="portfolio.html" class="content-link button page-scroll btn-1 btn-1c">View Projects</a>
                        </div>
                    </div>
                </div>
                <!-- /.home-img -->
            </div>
            <!-- /.home-page -->
        </div>
        <!-- /.home-content -->
    </div>

	<footer>
        <div class="container-fluid">
            <div class="wrap-footer-content">
                <span>&copy; Polaris Studio 2018 All Rights Reserved.</span>
                <div class="social-link-footer">
                    <a href="#"><i class="icon ion-logo-twitter"></i></a>
                    <a href="#"><i class="icon ion-logo-facebook"></i></a>
                    <a href="#"><i class="icon ion-logo-dribbble"></i></a>
                    <a href="#"><i class="icon ion-logo-instagram"></i></a>
                </div>
            </div>
        </div>
    </footer>

	@include('fe.partials.scripts')

</body>
</html>

