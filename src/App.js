import React, {Component} from 'react'
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import wallpaperImg from "./assets/img-wallpaper.jpg";
import imgBulletinBoard from "./assets/img-bulletin-board.jpeg";
import imgWoodPlank from "./assets/img-wood-plank.jpeg"
const GlobalStyle = createGlobalStyle `
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size:1em;
}
`
const BackgraundPag = styled.div`
  width:100%;
  height:100vh;
  padding:5%;
  display: flex;
  flex-wrap:wrap;
  background-image:url(${ wallpaperImg });
  background-color:rgb(65,65,65);
`
const SectionBulletinBoard = styled.section`
width:100vh;
height:62vh;
display:flex;
flex-direction:column; 
background-color:rgb(140, 81, 0);

`
const BulletinBoard = styled.div `
  width: 100%;
  height:50vh;
  padding: 5%;
  border:12px #6b2d00 ridge;
  overflow:auto;
  background-image:url(${ imgBulletinBoard });
  background-size:100% 100%;
  background-repeat: no-repeat;
  ::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 100px;
}
::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: rgb(115, 59, 0); 
  
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgb(90, 40, 0); 
}
p{
  font-size:1.2em;
  overflow-wrap:break-word;
  background-color:white;
}
`
const BoxAddtext = styled.div `
  width: 100%;
  min-height:15vh;
  padding:1.1%;
  border:12px #6b2d00 ridge;
  border-top:none;
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  background-image:url(${imgWoodPlank});
  background-size:100% 100%;
  background-repeat:no-repeat;
`
const InputAddText = styled.input `
  width:max(80%,20rem);
  height: 6vh;
  margin-right:1%;
  padding-left:2%;
  border: 2px solid rgb(180,180,180);
  border-radius: none;
  font-size:1.2em;
  &:focus{
  outline: 2px solid rgb(245, 190, 71);
}
`
const AllButton = styled.button`
  width: 5vh;
  height: 5vh;
  border:11px black solid;
  border-radius: 50%;
  background-color: rgb(236, 201, 104);
  border: 1px solid black;
  font-size:0.9em;
  &:hover{
  outline: 2px solid rgb(245, 190, 71);
}
  &#color-gray{
    border:rgb(190,190,190) 3px outset;
    background-color:rgb(205,205,205);
  }
`

const SectionCalculator = styled.section`
  margin:auto;
  padding:1.5% 1% 3% ;
  border: 5px rgb(205,205,205) outset;
  border-radius: 20px;
  background-color:rgb(215,215,215);
  h2{
    font-size:2em;
    margin-bottom:5%;
  }
`
const BoxResultCalc = styled.div`
  width: 99%;
  height:15vh;
  margin:2% auto;
  padding:2.5% 0 2% 2.5%;
  border:8px rgb(238, 238, 238) inset;
  align-items: center;
  background-color:rgb(10,10 , 10);
  
  
  p{
    width:99%;
    display:flex;
    justify-content:flex-end;
    overflow-wrap: break-word;
    text-align:end;
    font-size:1.14em;
    color: yellow;
  }
`
const InputNumber = styled.input`
border:5px rgb(205,205,205) inset;
background-color:rgb(240,240,240);
&:focus{
  outline: 2px solid rgb(245, 190, 71);
}
::-webkit-inner-spin-button{ 
    -webkit-appearance: none;
}
::-webkit-outer-spin-button { 
    -webkit-appearance: none;
}
`

class App extends Component{
  state={
    addTarefa:"",
    lista:"",
    calc:"", 
    result:0,
  }

  handleChangeText = (event) =>{
    this.setState({
      addTarefa: event.target.value
    })
  }
  addText = () => {
    let {addTarefa} = this.state
    if(addTarefa.length > 0 &&  addTarefa.length <= 500 && addTarefa !== NaN){
      
        this.setState({
          addTarefa:"",
          lista: addTarefa
        })
      }
  }
  removeText = () => {
    this.setState({
      lista:""
    })
  }
  addTextKeyCode = (e) => {
    if(e.keyCode === 13){
      this.addText()
    }else if(e.keyCode === 46){
      this.removeText()
    }
  }
  handleChangeCalc = (e) => {
    this.setState({
      calc: e.target.value
    })
  }
  double = () => {
    const {calc} = this.state
    if (calc != ""){
  this.setState({
    result: calc * 2
  })
    }

  }
  removeCalc =() =>{
    if (this.state.calc != ""){
      this.setState({
        calc: "",
        result:0
      })
    }
  }
  doubleKeyCode = (e) => {
      if(e.keyCode === 13){
        this.double()
      }else if(e.keyCode === 46){
        this.removeCalc()
      }
  }
    
  render(){
    return(
      
      <BackgraundPag>
        <GlobalStyle />
        <SectionBulletinBoard>

          <BulletinBoard>

            <p>{this.state.lista}</p>

          </BulletinBoard>

          <BoxAddtext >

            <InputAddText onKeyDown={(e) => this.addTextKeyCode(e)} value={this.state.addTarefa} onChange={this.handleChangeText} type="text" />
            <AllButton title='Use: Tecla(Enter)' onClick={this.addText} >add</AllButton>
            <AllButton title='Use: Tecla(Delete)' onClick={this.removeText } >⌫</AllButton>

          </BoxAddtext>

        </SectionBulletinBoard>
          
        <SectionCalculator >
          <h2>Duplicator</h2>

          <BoxResultCalc>
            <p>{this.state.result}</p>
          </BoxResultCalc>
            
          <InputNumber onKeyDown={(e) => this.doubleKeyCode(e)} type="number" value={this.state.calc} onChange={this.handleChangeCalc}/>
          <AllButton id="color-gray" title='Use: Tecla(Enter)' onClick={this.double}>x2</AllButton>
          <AllButton id="color-gray" title='Use: Tecla(Delete)' onClick={this.removeCalc}>⌫</AllButton>
            
        </SectionCalculator>

      </BackgraundPag>
    )
  }

}

export default App;