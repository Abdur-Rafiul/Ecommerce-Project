<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductListModel;

class ProductListController extends Controller
{
    function ProductListByRemark(Request $request){

       $remark = $request->remark;
       $ProductList = ProductListModel::where('remark',$remark)->get();
       return $ProductList;
    }

    function ProductListBySubCategory(Request $request){

       $Category = $request->Category;
       $SubCategory = $request->SubCategory;
       $ProductList = ProductListModel::where('category',$Category)->where('subcategory',$SubCategory)->get();
       return $ProductList;
    }
    function ProductListByCategory(Request $request){

       $Category = $request->Category;
       $ProductList = ProductListModel::where('category',$Category)->get();
       return $ProductList;
    }

    function ProductBySearch(Request $request){

       $key = $request->key;
       $ProductList = ProductListModel::where('title','LIKE',"%{$key}%")->get();
       return $ProductList;
    }

    function SimilarProduct(Request $request){

     $SubCategory = $request->subcategory;
     $ProductList=ProductListModel::where('subcategory',$SubCategory)->orderBy('id','desc')->limit(12)->get();
     return $ProductList;

    }
}
