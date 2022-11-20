<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('ssl_wireless_sms_api_token');
            $table->text('ssl_wireless_sms_sid');
            $table->string('ssl_wireless_sms_domain');


            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
