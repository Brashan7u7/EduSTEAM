<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class curso extends Model
{
    use HasFactory;
    protected $fillable = [
        'titulo',
        'descripcion',
    ];

    public function tema(){
        return $this->hasOne(tema::class);
    }

}
