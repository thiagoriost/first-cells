export const mockData = [
  {
    'cardId': '1102',
    'number': '4165 5738 3765 5476',
    'numberType': {
      'id': 'PAN',
      'name': 'Permanent Account Number'
    },
    'cardType': {
      'id': 'CREDIT_CARD',
      'name': 'Tarjeta de crédito'
    },
    'title': {
      'id': 'CREDIT_MX',
      'name': 'Tarjeta de crédito'
    },
    'alias': 'Mi otra tarjeta crédito',
    'cutOffDate': '2017-10-01T12:00:00Z',
    'brandAssociation': {
      'id': 'VISA',
      'name': 'VISA'
    },
    'physicalSupport': {
      'id': 'NORMAL_PLASTIC',
      'name': 'Plástico normal'
    },
    'expirationDate': '2018-02-01T12:00:00Z',
    'holderName': 'Hugo Sánchez',
    'currencies': [ {
      'currency': 'MXN',
      'isMajor': true
    } ],
    'grantedCredits': [ {
      'amount': 100000,
      'currency': 'MXN'
    } ],
    'availableBalance': {
      'currentBalances': [ {
        'amount': 60000,
        'currency': 'MXN'
      } ],
      'postedBalances': [ {
        'amount': 60000,
        'currency': 'MXN'
      } ],
      'pendingBalances': [ {
        'amount': 0,
        'currency': 'MXN'
      } ]
    },
    'disposedBalance': {
      'currentBalances': [ {
        'amount': 40000,
        'currency': 'MXN'
      } ],
      'postedBalances': [ {
        'amount': 40000,
        'currency': 'MXN'
      } ],
      'pendingBalances': [ {
        'amount': 0,
        'currency': 'MXN'
      } ]
    },
    'status': {
      'id': 'OPERATIVE',
      'name': 'Operative card'
    },
    'images': [ {
      'id': 'FRONT_CARD',
      'name': 'Front face of the card',
      'url': 'https://openapi.bbva.com/ccds/covers?default_image=true&v=4&country=mx&app_id=com.bbva.wallet_mx&pg=V0&bin=455504&width=404&height=256'
    }, {
      'id': 'BACK_CARD',
      'name': 'Back face of the card',
      'url': '/imageBack.jpg'
    } ]
  },
  {
    'cardId': '1101',
    'number': '4165 5738 3765 9836',
    'numberType': {
      'id': 'PAN',
      'name': 'Permanent Account Number'
    },
    'cardType': {
      'id': 'CREDIT_CARD',
      'name': 'Tarjeta de crédito'
    },
    'title': {
      'id': 'CREDIT_MX',
      'name': 'Tarjeta de crédito'
    },
    'alias': 'Mi tarjeta crédito *59836',
    'cutOffDate': '2016-10-01T12:00:00Z',
    'brandAssociation': {
      'id': 'VISA',
      'name': 'VISA'
    },
    'physicalSupport': {
      'id': 'NORMAL_PLASTIC',
      'name': 'Plástico normal'
    },
    'expirationDate': '2018-02-01T12:00:00Z',
    'holderName': 'Hugo Sánchez',
    'currencies': [ {
      'currency': 'MXN',
      'isMajor': true
    } ],
    'grantedCredits': [ {
      'amount': 80000,
      'currency': 'MXN'
    } ],
    'availableBalance': {
      'currentBalances': [ {
        'amount': 65000,
        'currency': 'MXN'
      } ],
      'postedBalances': [ {
        'amount': 15000,
        'currency': 'MXN'
      } ],
      'pendingBalances': [ {
        'amount': 50000,
        'currency': 'MXN'
      } ]
    },
    'disposedBalance': {
      'currentBalances': [ {
        'amount': 40000,
        'currency': 'MXN'
      } ],
      'postedBalances': [ {
        'amount': 15000,
        'currency': 'MXN'
      } ],
      'pendingBalances': [ {
        'amount': 0,
        'currency': 'MXN'
      } ]
    },
    'status': {
      'id': 'BLOCKED',
      'name': 'Blocked card'
    },
    'images': [ {
      'id': 'FRONT_CARD',
      'name': 'Front face of the card',
      'url': 'https://openapi.bbva.com/ccds/covers?default_image=true&v=4&country=mx&app_id=com.bbva.wallet_mx&pg=V0&bin=455504&width=404&height=256'
    }, {
      'id': 'BACK_CARD',
      'name': 'Back face of the card',
      'url': '/imageBack.jpg'
    } ]
  }
];
