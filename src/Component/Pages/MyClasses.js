import React,{useState} from 'react'

function MyClasses() {

           const [selectedOption, setselectedOption] = useState('')

    const formSubmit = ()=>{
        
    }

    return (
        <div style={{marginLeft:200}}>
                <form onSubmit={formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              onChange={()=>{setselectedOption("Male")}}
              name="a"
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              onChange={()=>{setselectedOption("Female")}}
              name="b"
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              onChange={()=>{setselectedOption("Other")}}
              name="c"
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
        </div>
    )
}

export default MyClasses
