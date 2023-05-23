<?php

namespace App\Http\Controllers;

use App\Models\AbsensiKaryawan;

class AbsensiController extends Controller
{
    public function index()
    {
        return inertia(
            'Absensi',
            [
                'listAbsensi' => AbsensiKaryawan::whereCreatedAt(date('Y-m-d'))
                    ->with(['user'])
                    ->latest()
                    ->get()
            ]
        );
    }

    public function simpan()
    {
        AbsensiKaryawan::create([
            'user_id' => request('id'),
            'masuk' => now(),
            'pulang' => now()
        ]);

        return to_route('absensi');
    }
}
