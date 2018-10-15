<?php

//controller de asistente
namespace App\Http\Controllers;

use App\Models\Asistente;
use Illuminate\Http\Request;

class AsistenteController extends Controller
{
	public function Asistentes()
	{
		return response()->json(Asistente::select('evento_asistente_id','nombre', 'apellido_paterno','apellido_materno')
									   ->where('evento_id',52)
									   ->get());
	}

	public function AsistentesColegio($colegio_id)
	{
		return response()->json(Asistente::select('evento_asistente_id','nombre', 'apellido_paterno','apellido_materno')
									   ->where([['evento_id',52],['colegio_id',$colegio_id]])
									   ->get());
	}
}