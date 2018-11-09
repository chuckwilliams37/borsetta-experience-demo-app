export default {
  TitleId: {
    chance: "guid"
  },
  isTitled: {
    chance: "bool"
  },
  StockNumber : {
    randexp: "[AVJQL]{2,3}-[0-9]{6}"
  },
  Shape: {
    values: ['round', 'princess','oval', 'cushion','emerald','marquise','pear']
  },
  Carat : {
    chance : 'floating({"min":0.10,"max":10,"fixed":2})'
  },
    //     "Color" : {
    //       "type": "string",
    //       "faker": {
    //           "random.arrayElement": [["J", "I","H", "G","F","E","D" ]]
    //       }
    //     },
    //     "Clarity" : {
    //       "type" :"string",
    //       "faker": {
    //           "random.arrayElement": [[ "FL", "IF","VVS<sub>1</sub>", "VVS<sub>2</sub>","SI<sub>1</sub>","SI<sub>2</sub>","I<sub>1</sub>","I<sub>2</sub>","I<sub>3</sub>" ]]
    //       }
    //     },
    //     "Cut" : {
    //       "type" :"string",
    //       "faker": {
    //           "random.arrayElement": [[ "ID","EX","VG" ]]
    //       }
    //     },
    //     "Pol" : {
    //       "type" :"string",
    //       "faker": {
    //           "random.arrayElement": [[ "ID","EX","VG" ]]
    //       }
    //     },
    //     "Sym" : {
    //       "type" :"string",
    //       "faker": {
    //           "random.arrayElement": [[ "ID","EX","VG" ]]
    //       }
    //     },
    //     "Measurement" : {
    //       "type" :"string",
    //       "faker" : {
    //         "fake": "{{random.number(10)}}.{{random.number(99)}}-{{random.number(10)}}.{{random.number(99)}}x{{random.number(10)}}.{{random.number(99)}}"
    //       }
    //     },
    //     "Cert" : {
    //       "type" :"string",
    //       "faker": {
    //           "random.arrayElement": [[ "IGI","GCAL","--" ]]
    //       }
    //     }
    //   }
  firstName: {
      faker: 'name.firstName'
  },
  lastName: {
      faker: 'name.lastName'
  },
  country: {
      faker: 'address.country'
  },
  createdAt: {
      faker: 'date.past'
  },
  username: {
      function: function() {
          return (
              this.object.lastName.substring(0, 5) +
              this.object.firstName.substring(0, 3) +
              Math.floor(Math.random() * 10)
          )
      }
  }
};


// {
//   "type": "object",
//   "properties": {
//     ,
//   "required": [
//     "TitleId",
//     "isTitled",
//     "StockNumber",
//     "Shape",
//     "Carat",
//     "Color",
//     "Clarity",
//     "Cut",
//     "Pol",
//     "Sym",
//     "Measurement",
//     "Cert"
//   ]
// };