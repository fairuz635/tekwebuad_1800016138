<?php

namespace App\Controllers;

class User extends BaseController
{
   public function index()
   {
      if (session()->get('user_nama') == '') {
         session()->setFlashdata('gagal', 'Anda belum menuliskan Email dan Password');
         return redirect()->to(base_url('login'));
      }
      return view('user_view');
   }

   //--------------------------------------------------------------------

}