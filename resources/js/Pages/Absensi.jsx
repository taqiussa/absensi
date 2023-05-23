import Sweet from '@/Components/Sweet'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, useForm } from '@inertiajs/react'
import React, { useState } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner'

const Absensi = ({ listAbsensi }) => {

    const { data, setData, post, errors, processing } = useForm({
        id: '',
    })

    const submit = (e) => {

        setData('id', e.target.value)
        post(route('absensi.simpan'),
            {
                onSuccess: () => {
                    Sweet.fire({
                        icon: 'success',
                        title: 'Berhasil',
                        text: 'Berhasil Absen Masuk!',
                    })
                },
                onError: () => {
                    Sweet.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Sudah Absen Masuk!',
                    })
                }
            })
    }

    const showAlert = () => {
        Sweet.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sudah Absen Masuk!',
        })
    }

    return (
        <GuestLayout>
            <Head title="Absensi" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <QrScanner
                                onDecode={submit}
                                onError={(error) => console.log(error?.message)}
                            />

                        </div>
                        <table>
                            <tbody>

                                <tr>
                                    <td>Nama</td>
                                    <td>Masuk</td>
                                    <td>Pulang</td>
                                </tr>
                                {listAbsensi && listAbsensi.map((absen, index) => {
                                    <tr key={index}>
                                        <td>{absen.user?.name}</td>
                                        <td>{absen.masuk}</td>
                                        <td>{absen.pulang}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}

Absensi.layout = page => <GuestLayout children={page} />
export default Absensi