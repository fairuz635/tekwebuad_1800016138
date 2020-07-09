<!doctype html>
<html lang="en">
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
 
    <a class="navbar-brand" href="#">FORM LOGIN</a>
 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
 
      
        
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">MUHAMMAD FAIRUZ BAHRAIN | 1800016138<span class="sr-only">(current)</span></a>
        </li>
      </ul>
 
      <a class="btn btn-info btn-warning" href="<?= base_url('login/logout'); ?>" role="button">Logout</a>
 
 
   </div>
 
</nav>
<head>
   <!-- Required meta tags -->
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

   <!-- Bootstrap CSS -->
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

   <title>User</title>
</head>

<body>

   
      <h1 class="text-center">Assalamualaikum, <?= session()->get('user_nama'); ?>!</h1>
      <p class="text-center">SELAMAT DATANG DI HALAMAN ANDA </p>
      <p class="text-center">Welcome To Your Page</p>
      <hr class="my-12">
      <p class="text-center">Jika anda sudah selesai dengan urusan anda pada halaman ini, silahkan klik "Logout" diatas.</p>
     
      
   </div>

   <!-- Optional JavaScript -->
   <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>

</html>