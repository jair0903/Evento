<?php
use App\Models\Asistente;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

// Rutas para servios de asistentes
$router->group(['prefix' => 'api/asistente'], function() use($router){

	$router->get('asistentes', ['uses' => 'AsistenteController@Asistentes']);
    
});
