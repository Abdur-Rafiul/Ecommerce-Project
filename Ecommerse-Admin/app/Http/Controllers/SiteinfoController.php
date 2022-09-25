<?php

namespace App\Http\Controllers;

use App\Models\SiteinfoModel;
use Illuminate\Http\Request;

class SiteinfoController extends Controller
{
    function SendSiteInfo(){
      $result =  SiteinfoModel::get();
      return $result;
    }
}
