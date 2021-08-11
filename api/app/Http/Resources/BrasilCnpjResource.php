<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class BrasilCnpjResource extends JsonResource{
    
    public function toArray($request){
        
        $return = array(
            "infoGerais" => array(
                "cnpj" => $this->cnpj,
                "razaoSocial" => $this->razao_social,
                "descAtividade" => $this->cnae_fiscal_descricao,
                "inicioAtvd" => implode('/', array_reverse(explode('-', $this->data_inicio_atividade))),
                "situacaoCadastral" => $this->descricao_situacao_cadastral,
                "ultimaSituacao" => implode('/', array_reverse(explode('-', $this->data_situacao_cadastral))),
                "estadoFundacao" => $this->municipio."/".$this->uf,
                "numInscricao" => $this->cnpj."-".$this->descricao_matriz_filial,
                "capitalSocial" => "R$ ".number_format($this->capital_social,2, ',', '.'),
            ),
            "endereco" => array(
                "logradouro" => $this->logradouro,
                "bairro" => $this->bairro,
                "cep" => $this->cep,
                "numero" => $this->numero,
                "uf" => $this->uf,
                "municipio" => $this->municipio,
                "codMunicipio" => $this->codigo_municipio,
                "complemento" => $this->complemento,
                "telefone" => array(
                    "telefone1" => $this->ddd_telefone_1,
                    "telefone2" => $this->ddd_telefone_2
                ),
            ),
            "socios" => $this->qsa,
            "atividadesEconomicas" => $this->cnaes_secundarias
        );

        return $return;
    }
}