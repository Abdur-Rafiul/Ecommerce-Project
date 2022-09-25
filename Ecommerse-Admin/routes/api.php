<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\SiteinfoController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/GetVisitorDetails',[VisitorController::class, 'GetVisitorDetails']);
Route::post('/SendContactDetails',[ContactController::class, 'SendContactDetails']);
Route::get('/SendSiteInfo',[SiteinfoController::class, 'SendSiteInfo']);
