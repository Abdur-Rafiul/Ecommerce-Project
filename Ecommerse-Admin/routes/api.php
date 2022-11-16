<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\SiteinfoController;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\ProductDetailsController;
use App\Http\Controllers\NotificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/GetVisitorDetails',[VisitorController::class, 'GetVisitorDetails']);
Route::post('/SendContactDetails',[ContactController::class, 'SendContactDetails']);
Route::get('/SendSiteInfo',[SiteinfoController::class, 'SendSiteInfo']);

Route::get('/SendCategoryDetails',[CategoryDetailsController::class, 'SendCategoryDetails']);
Route::get('/ProductListByRemark/{remark}',[ProductListController::class, 'ProductListByRemark']);
Route::get('/ProductListBySubCategory/{Category}/{SubCategory}',[ProductListController::class, 'ProductListBySubCategory']);
Route::get('/ProductListByRemark/{remark}',[ProductListController::class, 'ProductListByRemark']);
Route::get('/ProductListByCategory/{Category}',[ProductListController::class, 'ProductListByCategory']);
Route::get('/SendSliderInfo',[SliderController::class, 'SendSliderInfo']);
Route::get('/ProductDetails/{code}',[ProductDetailsController::class, 'ProductDetails']);
Route::get('/NotificationHistory',[NotificationController::class, 'NotificationHistory']);


