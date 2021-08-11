<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class BrasilCnpjController extends Controller
{
    public function consulta($cnpj){
        $urlApi = "https://brasilapi.com.br/api/cnpj/v1/{$cnpj}";
        $response = json_decode(Http::get($urlApi)->body());

        if(isset($response->message)){
            $response = array(
                "status" => 'cpf invalido'
            );
        }else{

            $arrayCnpj = array(
                "infoGerais" => array(
                    "cnpj" => $response->cnpj,
                    "razaoSocial" => $response->razao_social,
                    "descAtividade" => $response->cnae_fiscal_descricao,
                    "inicioAtvd" => $response->data_inicio_atividade,
                    "situacaoCadastral" => $response->descricao_situacao_cadastral,
                    "estadoFundacao" => $response->municipio."/".$response->uf,
                    "numInscricao" => $response->cnpj."-".$response->descricao_matriz_filial,
                    "capitalSocial" => $response->capital_social,
                ),
                "endereco" => array(
                    "logradouro" => $response->logradouro,
                    "bairro" => $response->bairro,
                    "cep" => $response->cep,
                    "numero" => $response->numero,
                    "uf" => $response->uf,
                    "municipio" => $response->municipio,
                    "codMunicipio" => $response->codigo_municipio,
                    "complemento" => $response->complemento,
                    "telefone" => array(
                        "telefone1" => $response->ddd_telefone_1,
                        "telefone2" => $response->ddd_telefone_2
                    ),
                ),
                "socios" => $response->qsa,
                "atividadesEconomicas" => $response->cnaes_secundarias
            );
            
            $response = array(
                "status" => "sucesso",
                "arrayCnpj" => $arrayCnpj
            );
        }
        return response($response);
    }
}
