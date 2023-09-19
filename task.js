// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
let company1 = {}

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
company1['company name'] = 'Company X'

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
company1.opened = 2012

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
company1.companyCode = 256369854

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
company1.employess = 41

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
company1.ceo = 'Vardenis Pavardenis'

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
company1.nvo = false

// 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
company1.workingLocations = ['Lithuania', 'Latvia']

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
company1.activityAreas = ['sales', 'marketing']

// 2.9. Property „contacts", kuris turės:
//       2.9.1. „phone"
//       2.9.2. „email"
//       2.9.3. „address", kuris turės:
//           2.9.3.1. „country"
//           2.9.3.2. „city"
//           2.9.3.3. „street"
//           2.9.3.4. „apartment"
company1.contacts = {}
    company1.contacts.phone = 856985436
    company1.contacts.email = 'sales@companyX.com'

company1.contacts.address = {}
    company1.contacts.address.country = 'Lithuania'
    company1.contacts.address.city = 'Kaunas'
    company1.contacts.address.street = 'Gedimino st.'
    company1.contacts.address.appartment = 18

console.log(company1)
 
// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".
    company1.getFullAddress = function() {
    // let street = this.contacts.address.street
    // let apartment = this.contacts.address.apartment
    // let city = this.contacts.address.city
    // let country = this.contacts.address.country
    let { street, appartment, city, country } = this.contacts.address

    return `${street} ${appartment}, ${city}, ${country}.`
    }
    console.log(company1.getFullAddress())

// 6. Sukurti funkcijas, kurios:
//    6.1. Pakeičia NVO statusą į true.

    company1.setNVO = function (){
    this.nvo = true
    }

    console.log(company1.nvo)
    company1.setNVO()
    console.log(company1.nvo)

//    6.2. Pakeičia NVO statusą į false.

    company1.setNonNVO = function() {
    this.nvo = false
    }

    console.log(company1.nvo)
    company1.setNonNVO()
    console.log(company1.nvo)
  
//    6.3. Keičia NVO statusą iš true į false ir iš false į true.

    company1.switchNVOStatus = function() {
    this.nvo = !this.nvo
    }

// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.

    company1.getWorkingLocations = function() {
    return 'Working locations are: ' + this.workingLocations.join(', ') + '.'
    }
    console.log(company1.getWorkingLocations())

//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.
    company1.getActivityAreas = function() {
    return 'Activity areas are: ' + this.activityAreas.join(', ') + '.'
    }
    console.log(company1.getActivityAreas())

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.

    company1.addWorkingLocations = function (newLocation) {
        this.workingLocations.push(newLocation)
    }
    console.log(company1.workingLocations)
    company1.addWorkingLocations('Germany')
    console.log(company1.workingLocations)

//        8.2. Naują veiklos rūšį prie veiklų masyvo.
    company1.addActivityArea = function (newActivity) {
    this.activityAreas.push(newActivity)
    }
    console.log(company1.activityAreas)
    company1.addActivityArea('Tourism')
    console.log(company1.activityAreas)

// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.

    company1.removeWorkingLocation = function(locationToRemove){
    let updatedLocations = this.workingLocations.filter(location => {
        return location !== locationToRemove
    })
    
    this.workingLocations = updatedLocations
    }
    company1.removeWorkingLocation('Germany')
    console.log(company1.workingLocations)


//        9.2. Veiklos rūšį iš veiklų masyvo.

    company1.removeActivityArea = function(areaToRemove){
    let updatedAreas = this.activityAreas.filter(area => {
        return area !== areaToRemove
    })
    
    this.activityAreas = updatedAreas
    }

    console.log(company1.activityAreas)
    company1.removeActivityArea('marketing')
    console.log(company1.activityAreas)

    let company2 = {
        'company name': 'Company A',
        opened: 2008,
        companyCode: 125478632,
        employees: 23,
        ceo: 'Steve Doe',
        nvo: true,
        workingLocations: ['Poland', 'Lithuania'],
        activityAreas: ['Consulting', 'Education'],
        contacts: {
            phone: 856932545,
            email: 'info@consulting.lt',
            address: {
                country: 'Lithuania',
                city: 'Alytus',
                street: 'Kauno st.',
                appartment: 8
            }
        },
        getFullAddress: function() {
           
        let { street, appartment, city, country } = this.contacts.address
        
        return `${street} ${appartment}, ${city}, ${country}.`
        },

        setNVO: function() {
            this.nvo = true
        },
        
        setNonNVO() {
            this.nvo = false
        },
          
        switchNVOStatus() {
            this.nvo = !this.nvo
        },
          
        getWorkingLocations: function() {
            return 'Working locations are: ' + this.workingLocations.join(', ') + '.'
        },

        getActivityAreas: function() {
            return 'Activity areas are: ' + this.activityAreas.join(', ') + '.'
        },

        addWorkingLocation: function(newLocation) {
            this.workingLocations.push(newLocation)
        },

        addActivityArea: function(newArea) {
            this.activityAreas.push(newArea)
        },

        removeWorkingLocation: function(locationToRemove) {
            let updatedLocations = this.workingLocations.filter(location => location !== locationToRemove)
            this.workingLocations = updatedLocations
        },

        removeActivityArea: function(areaToRemove) {
            let updatedAreas = this.activityAreas.filter(area => area !== areaToRemove)
            this.activityAreas = updatedAreas
        },
    }

    console.log(company2.getFullAddress())
    console.log(company2.getWorkingLocations())
    console.log(company2.getActivityAreas())
    company2.addWorkingLocation('Latvia')
    console.log(company2.workingLocations)
    company2.removeWorkingLocation('Poland')
    console.log(company2.workingLocations)

