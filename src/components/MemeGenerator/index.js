import {Component} from 'react'

import {
  MainHeading,
  SubHeading,
  InputBox,
  Home,
  Body,
  Div1,
  Div2,
  MemePara,
  SubmitButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    submitClicked: false,
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  changeUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({submitClicked: true})
  }

  render() {
    const {fontSize, topText, bottomText, submitClicked, imgUrl} = this.state
    return (
      <>
        <Home>
          <Body>
            <Div1>
              <MainHeading>Meme Generator</MainHeading>
              <form onSubmit={this.onSubmitForm}>
                <SubHeading>Image URL</SubHeading>
                <InputBox
                  onChange={this.changeUrl}
                  type="text"
                  placeholder="Enter Image Url"
                />

                <SubHeading>Top Text</SubHeading>
                <InputBox
                  onChange={this.changeTopText}
                  type="text"
                  placeholder="Enter Top Text"
                />

                <SubHeading>Bottom Text</SubHeading>
                <InputBox
                  onChange={this.changeBottomText}
                  type="text"
                  placeholder="Enter Bottom Text"
                />

                <SubHeading>Font Size</SubHeading>
                <InputBox
                  value={fontSize}
                  as="select"
                  onChange={this.onChangeFontSize}
                >
                  {fontSizesOptionsList.map(each => (
                    <option value={each.optionId}>{each.displayText}</option>
                  ))}
                </InputBox>
                <SubmitButton type="submit">Generate</SubmitButton>
              </form>
            </Div1>
            {submitClicked && (
              <Div2 imageUrl={imgUrl} data-testid="name">
                <MemePara fontSize={fontSize}>{topText}</MemePara>
                <MemePara fontSize={fontSize}>{bottomText}</MemePara>
              </Div2>
            )}
          </Body>
        </Home>
      </>
    )
  }
}

export default MemeGenerator
