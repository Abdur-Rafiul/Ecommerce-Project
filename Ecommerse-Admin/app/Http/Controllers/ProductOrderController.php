<?php

namespace App\Http\Controllers;

use App\Models\ProductOrderModel;
use App\Models\CartModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductOrderController extends Controller
{

    function AddToCart(Request $request){

        $color=$request->input('color');
        $size=$request->input('size');
        $quantity=$request->input('quantity');
        $email=$request->input('email');
        $product_code=$request->input('product_code');
        $ProductDetails=ProductListModel::where('product_code',$product_code)->get();
        $price=$ProductDetails[0]['price'];
        $special_price=$ProductDetails[0]['special_price'];
        if($special_price=='NA'){

          $total_price=$price*$quantity;
          $unit_price=$price;
        }else{

            $total_price=$special_price*$quantity;
            $unit_price=$special_price;
        }
        $result = CartModel::insert([
            'img'=>$ProductDetails[0]['image'],
            'product_name'=>$ProductDetails[0]['title'],
            'product_code'=>$product_code,
            'shop_name'=>"RFL",                //$ProductDetails[0]['shop_name'],
            'shop_code'=>"67",                 //$ProductDetails[0]['shop'],
            'product_info'=>'Color: '.$color.' size: '.$size,
            'product_quantity'=>$quantity,
            'unit_price'=>$unit_price,
            'total_price'=>$total_price,
            'email'=>$email,

        ]);
        return $result;

    }


    function CartCount(Request $request){

        $userEmail=$request->email;
        $result=CartModel::Where('email',$userEmail)->count();
        return $result;
    }

    function CartList(Request $request){
        $email = $request->email;
        $result = CartModel::where('email',$email)->get();
        return $result;

    }

    function RemoveCartList(Request $request){
        $id = $request->id;
        $result = CartModel::where('id',$id)->delete();
        return $result;
    }

    function CartItemPlus(Request $request){
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity+1;
        $total_price = $newQuantity*$price;
        $result = CartModel::where('id',$id)->update(['product_quantity' => $newQuantity, 'total_price' => $total_price]);
        return $result;


    }
    function CartItemMinus(Request $request){
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity-1;
        $total_price = $newQuantity*$price;
        $result = CartModel::where('id',$id)->update(['product_quantity' => $newQuantity, 'total_price' => $total_price]);
        return $result;


    }

}
