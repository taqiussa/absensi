import Sweet from '@/Components/Sweet';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { QrScanner } from '@yudiel/react-qr-scanner';

export default function Dashboard() {

    const [data, setData] = useState('No result');

    const showAlert = () => {
        Sweet.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sudah Absen Masuk!',
        })
    }

    return (
        <GuestLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <QrScanner
                                onDecode={showAlert}
                                onError={(error) => console.log(error?.message)}
                            />

                        </div>
                        {data}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
