<?php

use Illuminate\Support\Facades\ { Response, File };

if (!function_exists('getFile')) {
    function getFile($path)
    {
        if (!$path) {
            return response()->json([
                'status' => "failure",
                'message' => "Unauthorized Access 1"
            ]);
        }
        if (!File::exists($path)) {
            abort(404);
        }
        
        $file = File::get($path);
        $type = File::mimeType($path);
        if ($type == 'text/plain') {
            $type = 'image/svg+xml';
        }
        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
        return $response;
    }
}
