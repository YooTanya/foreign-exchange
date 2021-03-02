// User
/* {
    id: number
    name: string
    role: string // CS, HQS, MK
    branchID: string  // UCL, STW, ORQ, ABT, HQ
} */

// Rates
/* {
    currency: string
    rate: number
    spread: number
} */

// Branch
/* {
    id: string
    name: string
    address: {
        line1: string
        line2: string
        line3: string
        city: string
        zip: string
        country: string
        tel: string
    }
} */

// Transaction
/* {
    id: string
    createdDateTime: Date
    updatedDateTime: Date
    clientName: string
    position: string
    fxRate: number
    fxRateWithSpread: number
    amount: number
    branchID: string
    status: string
    csName: string
    note: [
        {
            message: string
            writer: string // CS or HQS
        }
    ]
} */

// Once HQS submiited the form -> increase HQS notification
// Notification counter staff
/* {
    transactionID: string
    transactionStatus: string
    isRead: boolean
} */

// Display conditions
/*
- transaction.branchID = branchID
- isRead = false
- once CS clicked on the notification icon -> isRead = true
*/

// Once CS submitted the form -> increase HQS notification
// Notification HQS
/* {
    transactionID: string
    option: string // BUY or SELL
    isRead: boolean
} */

// Display conditions
/*
- isRead = false
- once HQS clicked on the notification icon -> isRead = true
*/