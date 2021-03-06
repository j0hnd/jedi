<?php
Route::group(['middleware' => 'auth', 'namespace' => 'Jedi\Features\Documents\Controllers'] , function() {
    Route::get('/documents', 'DocumentsController@index');
    Route::get('/documents/{id}/list', 'DocumentsController@list_documents');
    Route::get('/document/{document_id}/{document_meta_id}/process', 'DocumentsController@process');
    Route::get('/download/{zip_file}/{folder_name}', 'DocumentsController@download_output');

    Route::get('/queue', 'QueueController@index');
    Route::get('/queue/filtered', 'QueueController@filter');

    Route::post('/batch/{batch_id}/status', 'DocumentsController@update_batch_status');
  	Route::post('/document/uploads', 'DocumentsController@uploads');
    Route::post('/document/details/{document_details_id}/update', 'DocumentsController@update_document_process');
    Route::post('/document/save', 'DocumentsController@save');

    Route::get('/fire/events', 'QueueController@fire_events');
});