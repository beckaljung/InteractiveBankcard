/**
 App for Lab2 in the course TDDC/# Interaktive programing
 Rebecka Ljung
 */

import React, { useState }  from 'react';
import FlipCard from 'react-native-flip-card';
import {Picker} from '@react-native-picker/picker';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image, 
  Button, 
  TextInput
} from 'react-native';



const App = () => {

  // Variabler
  const [name, setName]= useState('');
  const [cardnr, setCardNr]= useState('#### #### #### ####');
  const [cvv, setCvv]= useState('');
  const [nrcvv, setnrCvv]= useState(4);
  const [cardtype, setCardType]= useState(require('./assets/visa.png'));
  const [yy, setYY]= useState('YY');
  const [mm, setMM]= useState('MM');
  const [isCardFlipped, setisCardFlipped]= useState(false);
  const Separator=()=>( <View style={styles.separator}/>);
  const [cardNumberMaxLength, setCardNumberMaxLength] = useState(16);
 

  //Functions
  const onCardNumberChange = (number) => {
    let tempNumber = number;
    let found=0;
    number = number.replace(/\D/g, '');
    let re = new RegExp("^4");
    if (number.match(re) != null) {
      tempNumber = number
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
      setCardType(require('./assets/visa.png'));
      setnrCvv(3);  
      setCardNumberMaxLength(16);
      found=1;
    }

    re = new RegExp("^(34|37)");
    if (number.match(re) != null){ 
      tempNumber = number
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
      setCardType(require('./assets/amex.png'));
      setnrCvv(4);
      setCardNumberMaxLength(15);
      found=1;
    }

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null){
      tempNumber = number
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');

      setCardType(require('./assets/mastercard.png'));
      setnrCvv(3);
      setCardNumberMaxLength(16);
      found=1;
    } 

    re = new RegExp("^6011");
    if (number.match(re) != null){ 
      tempNumber = number
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');

      setCardType(require('./assets/discover.png'));
      setnrCvv(3);
      setCardNumberMaxLength(16);
      found=1;
    }
      
    re = new RegExp('^9792')
    if (number.match(re) != null){
      tempNumber = number
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
      setCardType(require('./assets/troy.png'));
      setnrCvv(3);
      setCardNumberMaxLength(16);
      found=1;
    } 

    if(found== 0){
      tempNumber = number
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
      setCardType(require('./assets/visa.png'));
      setnrCvv(3);
      setCardNumberMaxLength(16);
    }

    setCardNr(tempNumber);
  }
 
  // -------------------What is shown in the app-------------------------------
  return (
    <View style={styles.theApp}>
      <StatusBar style="auto" />
      {/* -------------The form -------------------------------------*/}
      <View style={styles.theForm}> 
        <View style={{height:30}}></View>
        <View style={styles.rubrikBox}>
          <Text styles={styles.inforubrikText}> Card Number </Text>
        </View>
        <TextInput 
          style={styles.bigInputbox } 
          keyboardType='numeric'
          maxLength={cardNumberMaxLength}
          placeholder= 'Card Number' 
          onChangeText={(val) => onCardNumberChange(val)}
        />
        <View style={styles.rubrikBox}>
          <Text styles={styles.inforubrikText}> Card Name </Text>
        </View> 
        <TextInput 
          style={styles.bigInputbox } 
          placeholder= 'Card Name' 
          onChangeText={(val) => setName(val)}
        />
        <View style={styles.rubrikBox}> 
          <Text style={styles.expireText} > Expirasion Date:  </Text>
        </View>
        <View style={styles.pickerBox}>
          <View style={styles.dateInputbox}> 
            <Picker
              //onValueChange={(itemValue, itemIndex) => setMM(itemValue)}
              selectedValue={mm}
              onValueChange={(itemValue, itemIndex) => setMM(itemValue)}
            >
              <Picker.Item label="Month" value='0' />
              <Picker.Item label="01" value="1" />
              <Picker.Item label= "02" value="2" />
              <Picker.Item label="03" value="3" />
              <Picker.Item label="04" value="4" />
              <Picker.Item label="05" value="5" />
              <Picker.Item label="06" value="6" />
              <Picker.Item label="07" value="7" />
              <Picker.Item label="08" value="8" />
              <Picker.Item label="09" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
            </Picker>
          </View>
          <Separator/>
          <View style={styles.dateInputbox}> 
            <Picker
              selectedValue={yy}
              onValueChange={(itemValue, itemIndex) => setYY(itemValue)}
            >
              <Picker.Item label="Year" value="0" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2022" value="2022" />
              <Picker.Item label="2023" value="2023" />
              <Picker.Item label="2024" value="2024" />
            </Picker>
          </View>
        </View>
        <View style={styles.rubrikBox}> 
          <Text style={styles.cvvrubrikText}> Cvv: </Text>
        </View>
        <TextInput 
          keyboardType='numeric'
          //maxLength={parseInt(nrcvv)}
           maxLength={nrcvv}
          // maxLength={4}
          style={styles.cvvInputbox } 
          placeholder= 'Cvv' 
          onChangeText={(val) => setCvv(val)}
          onFocus={() => setisCardFlipped( true)}
          onBlur={() => setisCardFlipped( false)}
        />
        <View style={styles.theButton}>
          <Button title=" SUBMIT" color='pink'/>
        </View>
      </View>

      {/*-----------The Card------------------------------- */}
      <FlipCard 
        friction={6}
        clickable={false}
        flipHorizontal={true}
        flipVertical={false}
        flip={isCardFlipped}
      >
        {/* The front side */}
        <View style={styles.theCard}>
          <Image style={styles.cardImage} source={require('./assets/cardfront.jpeg')}/> 
          <Image style={styles.theChip} source={require('./assets/chip.png')}/>
          <View style={styles.theLogo}>
            <Image style={styles.theLogoIm} source={cardtype}/>
          </View>
          <View style={styles.cardnrBox}>
            <Text style={styles.cardnrText}> {cardnr} </Text>
          </View>
          <View style={styles.nameBox}> 
            <Text style={styles.cardinfoText}> Card Holder </Text>
            <Text style={styles.infoText}> {name} </Text>
          </View>
          <View style={styles.dateBox}>
            <Text style={styles.cardinfoText}> Expiers </Text>
            <Text style={styles.infoText}> {mm}  <Text style={styles.infoText}>\ <Text style={styles.infoText}>{yy}</Text></Text> </Text>
          </View>
        </View>
        {/* The back Side */}
        <View style={styles.theCard}>
          <Image style={styles.cardImage} source={require('./assets/cardfront.jpeg')}/> 
          <View style={styles.blackStrip}></View>
          <Text style={styles.cvvrubrikbackText} >CVV</Text>
          <View style={styles.whiteStrip}>
            <Text style={styles.cvvbackText} > {cvv}</Text>
          </View>
          <View style={styles.theBackLogo}>
            <Image style={styles.theLogoIm} source={cardtype}/>
          </View>
        </View>
      </FlipCard>
    </View>    
  );
};

const styles = StyleSheet.create({
  theApp: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  theForm: {
    position:'absolute',
    top: 180,
    width: 350,
    height: 445,
    bottom: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20
  },
  theCard: {
    top: 30,
    paddingTop: 0,
    width: 270,
    height: 168,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigInputbox:{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    margin: 10,
    width: 300, 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignContent: 'center',
  },
  dateInputbox:{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    margin: 10,
    width: 140, 
    backgroundColor: 'white',
    borderRadius: 10 
  },
  cvvInputbox:{ 
    position:'absolute',
    left: 15,
    top: 325,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    margin: 10,
    width: 110, 
    backgroundColor: 'white',
    borderRadius: 10 
  },
  rubrikBox:{
    height: 20,
    width: 300,
  },
  nameBox:{
    position:'absolute', 
    width: 164,
    position:'absolute',
    height: 50,
    //backgroundColor: 'red', 
    bottom: 7,
    left: 7, 
    borderRadius: 10
  },
  dateBox:{
    position:'absolute', 
    width: 90,
    height: 50,
    bottom: 7,
    right:7, 
    borderRadius: 10
  },
  cardnrBox:{
    position:'absolute',
    width:250,
    height: 50,
    borderRadius: 12,
  }, 
  pickerBox:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  theLogo: {
    position:'absolute',
    width:60, 
    height:60, 
    right:10,
    top:0
  }, 
  theBackLogo:{
    position:'absolute',
    width:60, 
    height:60, 
    right:15,
    bottom:2
  },
  theButton:{
    position: 'absolute',
    bottom: 10,
    height: 40,
    width: 200,
    borderRadius: 20
  },  
  separator:{
    marginHorizontal:0
  },
  cardImage: {
    paddingTop: 0,
    width: 270,
    height: 168,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  theChip: {
    position:'absolute', 
    width:30, 
    height:30,
    left:10,
    top:10
  },
  theLogoIm:{
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 1 
  },
  blackStrip:{
    position:'absolute',
    width: '100%' , 
    height:30, 
    top:20,
    backgroundColor: 'black'
  },
  whiteStrip:{
    position:'absolute',
    width: 250 , 
    height:30, 
    top:75,
    backgroundColor: 'white', 
    borderRadius: 5
  },
  cardinfoText:{
    position:'absolute',
    padding:2, 
    top: 5,
    fontWeight: 'bold', 
    color: 'white'
  },
  cardnrText:{
    padding:2,
    textAlignVertical: 'center',
    top: 10,
    left: 10,
    color: 'white',
    fontSize: 20
  },
  expireText:{
    position:'absolute',
    left:0
  },
  cvvrubrikbackText:{
    position: 'absolute', 
    top: 55,
    right: 20,
    color:'white', 
    fontWeight: 'bold'
  },
  cvvrubrikText:{
    position:'absolute',
    left: 10
  },
  cvvbackText:{
    padding:6,
    textAlign: 'right'
  },
  inforubrikText:{
    position:'absolute',
    left:20
  },
  infoText:{
    position:'absolute', 
    padding: 2, 
    bottom: 2, 
    color:'white'
  }
});

export default App;
