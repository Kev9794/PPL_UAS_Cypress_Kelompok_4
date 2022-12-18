describe('Tambah Bank Darah Oleh Admin', () => {
    // Data Login Admin
    const email = 'k.natanael88@gmail.com';
    const password = '123456';
    // Data Edit Form
    const namaBank = 'PMI Kota Jakarta';
    const kontak = '0823123212';
    const kecamatan = 'Kramat';
    const kelurahan = 'Senen';
    const kota = 'Jakarta';
    const alamat = 'Jl Kramat Raya No.47';
    it('Tambah Data dengan Form Terisi Sempurna', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.nav > :nth-child(4) > a').click()
        cy.get('.pull-right > a').click()
        cy.get(':nth-child(2) > .form-control').type(namaBank)
        cy.get(':nth-child(3) > .form-control').type(kontak)
        cy.get(':nth-child(4) > .form-control').type(kota)
        cy.get(':nth-child(5) > .form-control').type(kecamatan)
        cy.get(':nth-child(6) > .form-control').type(kelurahan)
        cy.get(':nth-child(7) > .form-control').type(alamat)
        cy.get('.btn').click()
    })

    // it('Tambah Data dengan Field Nama Bank Kosong', () => {
    //     cy.visit('http://localhost:8000/')
    //     cy.get(':nth-child(8) > a').click()
    //     cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
    //     cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
    //     cy.get('.btn-primary').click()
    //     cy.get('.nav > :nth-child(4) > a').click()
    //     cy.get('.pull-right > a').click()
    //     cy.get(':nth-child(3) > .form-control').type(kontak)
    //     cy.get(':nth-child(4) > .form-control').type(kota)
    //     cy.get(':nth-child(5) > .form-control').type(kecamatan)
    //     cy.get(':nth-child(6) > .form-control').type(kelurahan)
    //     cy.get(':nth-child(7) > .form-control').type(alamat)
    //     cy.get('.btn').click()
    // })

    // it('Tambah Data dengan Field Kontak Kosong', () => {
    //     cy.visit('http://localhost:8000/')
    //     cy.get(':nth-child(8) > a').click()
    //     cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
    //     cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
    //     cy.get('.btn-primary').click()
    //     cy.get('.nav > :nth-child(4) > a').click()
    //     cy.get('.pull-right > a').click()
    //     cy.get(':nth-child(2) > .form-control').type(namaBank)
    //     cy.get(':nth-child(4) > .form-control').type(kota)
    //     cy.get(':nth-child(5) > .form-control').type(kecamatan)
    //     cy.get(':nth-child(6) > .form-control').type(kelurahan)
    //     cy.get(':nth-child(7) > .form-control').type(alamat)
    //     cy.get('.btn').click()
    // })

    // it('Tambah Data dengan Field Kota Kosong', () => {
    //     cy.visit('http://localhost:8000/')
    //     cy.get(':nth-child(8) > a').click()
    //     cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
    //     cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
    //     cy.get('.btn-primary').click()
    //     cy.get('.nav > :nth-child(4) > a').click()
    //     cy.get('.pull-right > a').click()
    //     cy.get(':nth-child(2) > .form-control').type(namaBank)
    //     cy.get(':nth-child(3) > .form-control').type(kontak)
    //     cy.get(':nth-child(5) > .form-control').type(kecamatan)
    //     cy.get(':nth-child(6) > .form-control').type(kelurahan)
    //     cy.get(':nth-child(7) > .form-control').type(alamat)
    //     cy.get('.btn').click()
    // })

    // it('Tambah Data dengan Field Kecamatan Kosong', () => {
    //     cy.visit('http://localhost:8000/')
    //     cy.get(':nth-child(8) > a').click()
    //     cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
    //     cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
    //     cy.get('.btn-primary').click()
    //     cy.get('.nav > :nth-child(4) > a').click()
    //     cy.get('.pull-right > a').click()
    //     cy.get(':nth-child(2) > .form-control').type(namaBank)
    //     cy.get(':nth-child(3) > .form-control').type(kontak)
    //     cy.get(':nth-child(4) > .form-control').type(kota)
    //     cy.get(':nth-child(6) > .form-control').type(kelurahan)
    //     cy.get(':nth-child(7) > .form-control').type(alamat)
    //     cy.get('.btn').click()
    // })

    // it('Tambah Data dengan Field Kelurahan Kosong', () => {
    //     cy.visit('http://localhost:8000/')
    //     cy.get(':nth-child(8) > a').click()
    //     cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
    //     cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
    //     cy.get('.btn-primary').click()
    //     cy.get('.nav > :nth-child(4) > a').click()
    //     cy.get('.pull-right > a').click()
    //     cy.get(':nth-child(2) > .form-control').type(namaBank)
    //     cy.get(':nth-child(3) > .form-control').type(kontak)
    //     cy.get(':nth-child(4) > .form-control').type(kota)
    //     cy.get(':nth-child(5) > .form-control').type(kecamatan)
    //     cy.get(':nth-child(7) > .form-control').type(alamat)
    //     cy.get('.btn').click()
    // })

    // it('Tambah Data dengan Field Alamat Kosong', () => {
    //     cy.visit('http://localhost:8000/')
    //     cy.get(':nth-child(8) > a').click()
    //     cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
    //     cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
    //     cy.get('.btn-primary').click()
    //     cy.get('.nav > :nth-child(4) > a').click()
    //     cy.get('.pull-right > a').click()
    //     cy.get(':nth-child(2) > .form-control').type(namaBank)
    //     cy.get(':nth-child(3) > .form-control').type(kontak)
    //     cy.get(':nth-child(4) > .form-control').type(kota)
    //     cy.get(':nth-child(5) > .form-control').type(kecamatan)
    //     cy.get(':nth-child(6) > .form-control').type(kelurahan)
    //     cy.get('.btn').click()
    // })

    // it('Tambah Data dengan Semua Field Kosong', () => {
    //     cy.visit('http://localhost:8000/')
    //     cy.get(':nth-child(8) > a').click()
    //     cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
    //     cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
    //     cy.get('.btn-primary').click()
    //     cy.get('.nav > :nth-child(4) > a').click()
    //     cy.get('.pull-right > a').click()
    //     cy.get('.btn').click()
    // })
})