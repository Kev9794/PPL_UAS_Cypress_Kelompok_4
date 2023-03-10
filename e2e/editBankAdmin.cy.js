describe('Edit Bank Darah Oleh Admin', () => {
    // Data Login Admin
    const email = 'k.natanael88@gmail.com';
    const password = '123456';
    // Data Edit Form
    const namaBank = 'PMI Kota Bandung';
    const kontak = '0823123212';
    const kecamatan = 'Pandanwangi';
    const kelurahan = 'Rampal';
    const kota = 'Bandung';

    it('Edit Data dengan Form Terisi Sempurna', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[href="http://localhost:8000/admin/center/edit/2"]').click()
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(2) > .form-control').type(namaBank)
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').type(kontak)
        cy.get(':nth-child(4) > .form-control').clear()
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get(':nth-child(5) > .form-control').clear()
        cy.get(':nth-child(5) > .form-control').type(kelurahan)
        cy.get(':nth-child(6) > .form-control').clear()
        cy.get(':nth-child(6) > .form-control').type(kota)
        cy.get('.btn').click()
    })

    it('Edit Data dengan Field Nama Bank Darah Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[href="http://localhost:8000/admin/center/edit/2"]').click()
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').type(kontak)
        cy.get(':nth-child(4) > .form-control').clear()
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get(':nth-child(5) > .form-control').clear()
        cy.get(':nth-child(5) > .form-control').type(kelurahan)
        cy.get(':nth-child(6) > .form-control').clear()
        cy.get(':nth-child(6) > .form-control').type(kota)
        cy.get('.btn').click()
    })

    it('Edit Data dengan Field Kontak Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[href="http://localhost:8000/admin/center/edit/2"]').click()
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(2) > .form-control').type(namaBank)
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(4) > .form-control').clear()
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get(':nth-child(5) > .form-control').clear()
        cy.get(':nth-child(5) > .form-control').type(kelurahan)
        cy.get(':nth-child(6) > .form-control').clear()
        cy.get(':nth-child(6) > .form-control').type(kota)
        cy.get('.btn').click()
    })

    it('Edit Data dengan Field Kota Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[href="http://localhost:8000/admin/center/edit/2"]').click()
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(2) > .form-control').type(namaBank)
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').type(kontak)
        cy.get(':nth-child(4) > .form-control').clear()
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get(':nth-child(5) > .form-control').clear()
        cy.get(':nth-child(5) > .form-control').type(kelurahan)
        cy.get(':nth-child(6) > .form-control').clear()
        cy.get('.btn').click()
    })

    it('Edit Data dengan Field Kecamatan Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[href="http://localhost:8000/admin/center/edit/2"]').click()
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(2) > .form-control').type(namaBank)
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').type(kontak)
        cy.get(':nth-child(4) > .form-control').clear()
        cy.get(':nth-child(5) > .form-control').clear()
        cy.get(':nth-child(5) > .form-control').type(kelurahan)
        cy.get(':nth-child(6) > .form-control').clear()
        cy.get(':nth-child(6) > .form-control').type(kota)
        cy.get('.btn').click()
    })

    it('Edit Data dengan Field Kelurahan Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[href="http://localhost:8000/admin/center/edit/2"]').click()
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(2) > .form-control').type(namaBank)
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').type(kontak)
        cy.get(':nth-child(4) > .form-control').clear()
        cy.get(':nth-child(4) > .form-control').type(kecamatan)
        cy.get(':nth-child(5) > .form-control').clear()
        cy.get(':nth-child(6) > .form-control').clear()
        cy.get(':nth-child(6) > .form-control').type(kota)
        cy.get('.btn').click()
    })

    it('Edit Data dengan Semua Field Kosong', () => {
        cy.visit('http://localhost:8000/')
        cy.get(':nth-child(8) > a').click()
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type(email)
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type(password)
        cy.get('.btn-primary').click()
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[href="http://localhost:8000/admin/center/edit/2"]').click()
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(4) > .form-control').clear()
        cy.get(':nth-child(5) > .form-control').clear()
        cy.get(':nth-child(6) > .form-control').clear()
        cy.get('.btn').click()
    })
})