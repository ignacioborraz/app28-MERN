let optionsNav = {
    admin: [
        {to: '/createCompany', name: 'New Company'},
        {to: '/getCompanies', name: 'Companies'},
        {to: '/createJob', name: 'New Job'},
        {to: '/getJobs', name: 'Jobs'}
    ],
    owner: [
        {to: '/createJob', name: 'New Job'},
        {to: '/getJobs', name: 'Jobs'},
        {to: '/getCompanies', name: 'Companies'},
    ],
    user: [
        {to: '/getCompanies', name: 'Companies'},
        {to: '/getJobs', name: 'Jobs'}
    ]
}

export default optionsNav