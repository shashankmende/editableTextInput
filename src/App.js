import './App.css'
import {Component} from 'react'

// Replace your code here
class App extends Component {
  state = {userInput: '', edit: true}

  onChangeInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onClickSave = event => {
    event.preventDefault()
    this.setState({
      edit: false,
    })
  }

  onClickEdit = event => {
    event.preventDefault()
    this.setState({
      edit: true,
    })
  }

  render() {
    const {userInput, edit} = this.state
    console.log('edit', edit)
    return (
      <div className="bg-container">
        <form className="form-container">
          <h1>Editable Text Input</h1>
          {edit ? (
            <div className="save-container">
              <input
                type="text"
                className="input"
                onChange={this.onChangeInput}
                value={userInput}
              />
              <button
                type="submit"
                className="saveBtn"
                onClick={this.onClickSave}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="save-container">
              <p>{userInput}</p>
              <button
                type="submit"
                className="saveBtn"
                onClick={this.onClickEdit}
              >
                Edit
              </button>
            </div>
          )}
        </form>
      </div>
    )
  }
}
export default App
