<?php

namespace App\Http\Controllers;

use App\Models\directOrderModel;
use App\Models\ProductOrderModel;
use App\Models\CartModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductOrderController extends Controller
{

    function CartOrder(Request $request){
        $city = $request->input('city');
        $paymentMethod = $request->input('paymentMethod');
        $address = $request->input('deliveryAddress');
        $yourName = $request->input('yourName');
        $email = $request->input('email');
        $invoice_no = $request->input('invoice_no');
        $ShippingPrice = $request->input('ShippingPrice');
        date_default_timezone_set('Asia/Dhaka');
        $request_time = date("h:i:sa");
        $request_date = date("d-m-y");
        $CartList = CartModel::where('email',$email)->get();
        $cartInsertDeleteResult="";
        foreach ($CartList as $CartListItem){
            $resultInsert = DirectOrderModel::insert([
                'invoice'=>"c".$invoice_no,
                'product_name'=>$CartListItem['product_name'],
                'product_code'=>$CartListItem['product_code'],
                'shop_name'=>'m',
                'shop_code'=>'c',
                'product_info'=>$CartListItem['product_info'],
                'product_quantity'=>$CartListItem['product_quantity'],
                'unit_price'=>$CartListItem['unit_price'],
                'total_price'=>$CartListItem['total_price'],
                'email'=>$email,
                'payment_method'=>$paymentMethod,
                'delivery_address'=>$address,
                'city'=>$city,
                'delivery_charge'=>'1',
                'order_date'=>$request_date,
                'order_time'=>$request_time,
                'order_status'=>'pending',
            ]);
        }
    }
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
