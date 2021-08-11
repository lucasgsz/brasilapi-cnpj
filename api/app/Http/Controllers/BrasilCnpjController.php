<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use App\Http\Resources\BrasilCnpjResource;

class BrasilCnpjController extends Controller
{
    public function consulta($cnpj){
        $urlApi = "https://brasilapi.com.br/api/cnpj/v1/{$cnpj}";
        $response = json_decode(Http::get($urlApi)->body());

        if(isset($response->message)){
            $response = array(
                "status" => 'error'
            );
        }else{
            $arrayCnpj = new BrasilCnpjResource($response);
            $response = array(
                "status" => "sucesso",
                "arrayCnpj" => $arrayCnpj
            );
        }
        return response($response);
    }
}
