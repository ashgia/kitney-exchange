import React, { Component } from 'react';

class MagicButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = { 
      age: '',
      agesArray: [],
      possibleMatchPair: []
    }
    this.ageArrayFinder = this.ageArrayFinder.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState: ', prevState);

    if(prevState.agesArray !== this.state.agesArray) {
      this.findMatchPair(this.state.agesArray, this.state.agesArray)
      console.log(this.finalBatcher(this.state.possibleMatchPair))

    }
  }

  // Handle age limit within 10 years apart
  ageArrayFinder(userData, age) {
    console.log(userData)

    return this.setState({agesArray: userData.map((element, index) => 
    Math.abs(element.donor_age - age) <= 10 ? {age: element.donor_age, pair_id: element.pair_id, donor_blood_type: element.donor_blood_type, recipient_blood_type: element.recipient_blood_type} : null)
    .filter(element => element !== null)})
  }

  changeHandler = (e) => {
    this.setState({age: e.target.value})
  }
// const donor2 =     [ 'B', 'A', 'AB', 'A', 'O', 'O']
// const recipient2 = [ 'B', 'A', 'AB', 'AB', 'O', 'A' ]


 findMatchPair(array1, array2) {
   let { possibleMatchPair } = this.state
  // console.log('donor2: ', array1);
  // console.log('recipient2: ', array2);
  console.log('')
  // const possibleMatchPair = []

  for(let i = 0; i < array1.length; i++) {
    console.log('');

    for(let j = 0; j < array2.length; j++) {
      console.log(`donor2[${i}]`, array1[i].donor_blood_type, `recipient2[${j}]`, array2[j].recipient_blood_type)
      console.log('Compare: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )

        if(array1[i].donor_blood_type === 'A' && array2[j].recipient_blood_type === 'A') {
          console.log('Match a for a : ', array1[i].donor_blood_type, array2[j].recipient_blood_type )
          console.log('Match a for a : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])

        } else if(array1[i].donor_blood_type === 'A' && array2[j].recipient_blood_type !== 'B' && array2[j].recipient_blood_type !== 'AB' && array2[j].recipient_blood_type !== 'O') {
          console.log('Compare a for a: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    

        } else if(array1[i].donor_blood_type === 'A' && array2[j].recipient_blood_type === 'AB' && array2[j].recipient_blood_type !== 'B') {
          console.log('Match a for ab: ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        }

        if(array1[i].donor_blood_type === 'B' && array2[j].recipient_blood_type === 'B') {
          console.log('Compare b for b : ', array1[i].pair_id, array2[j].pair_id )
          console.log('Match b for b : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        } else if(array1[i].donor_blood_type === 'B' && array2[j].recipient_blood_type !== 'A' && array2[j].recipient_blood_type !== 'AB' && array2[j].recipient_blood_type !== 'O') {
          console.log('Compare b for b: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        } else if(array1[i].donor_blood_type === 'B' && array2[j].recipient_blood_type === 'AB' && array2[j].recipient_blood_type !== 'A') {
          console.log('Match b for ab : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        }

        if(array1[i].donor_blood_type === 'AB' && array2[j].recipient_blood_type === 'AB' || array1[i].donor_blood_type !== 'A' && array2[j].recipient_blood_type !== 'A' && array1[i].donor_blood_type !== 'B' && array2[j].recipient_blood_type !== 'B'  && array1[i].donor_blood_type !== 'O' && array2[j].recipient_blood_type !== 'O') {
          console.log('Match ab for ab : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        }

        if(array1[i].donor_blood_type === 'O' && array2[j].recipient_blood_type === 'O') {
          console.log('Match o for o : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        } else if(array1[i].donor_blood_type === 'O' && array2[j].recipient_blood_type === 'A' || array1[i].donor_blood_type === 'O' && array2[j].recipient_blood_type === 'B' || array1[i].donor_blood_type === 'O' && array2[j].recipient_blood_type === 'AB') {
          console.log('Match o for a, b, ab, o : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
      }
    }
  }
}

finalBatcher = (arr1) => {
  // console.log(arr1)
  const initialArr= arr1.filter((e, i)=> e[i]);
  const idFinder = (a) => {
    const newArr = [];
    for (let i = 0; i < initialArr.length; i++){
      newArr.push(initialArr[i][a])
    }
      return newArr;
  }
  const DonorArr = idFinder(0);
  const RecipArr = idFinder(1);
  const finalResult = [];
  console.log(DonorArr, RecipArr)
  
  finalResult.push([DonorArr[0], RecipArr[0]]);

  return finalResult;

  // for (let i = 0; i < DonorArr.length; i++){
  //   // for (let j = 0; j < arr1.length; i++)
  //   if (DonorArr[i] === RecipArr[i]){
  //     finalResult.push([DonorArr[i], RecipArr[j]])
  //   }

  }

// findMatchPair(donor2, recipient2)
// console.log('possibleMatchPair: ', possibleMatchPair)


  render() { 
    let profileList = this.props
    console.log(this.state)
    
    return ( 
      <div><button onClick={()=>this.ageArrayFinder(profileList.data, this.state.age)}>Magic Button!</button>
      <select onChange={this.changeHandler}>
        <option> Age </option>
        <option value="18">18</option>
        <option value="28">28</option>
        <option value="38">38</option>
        <option value="48">48</option>
      </select>
      </div>
     );
  }
}
 
export default MagicButton;