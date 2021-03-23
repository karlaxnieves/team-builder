import React from "react";

export default function teamMemberForm(props) {
    
    const { values, update, submit } = props;


    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);

    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }


    return (
        <form className="form container" onSubmit={onSubmit}>
          <div className="form-group inputs">
           
            <label>
              Name
              <input
                type="text"
                name="name"
                onChange={onChange}
                value={values.username}
                placeholder="type your name"
                maxLength="30"
              />
            </label>
    
            <label>
              Email
             
              <input
                name="email"
                value={values.email}
                type="email"
                onChange={onChange}
                placeholder="type an email"
              />
            </label>
    
            
            <label>
              Role
             
              <select name="role" value={values.role} onChange={onChange}>
                <option value="">------select role------</option>
                <option value='instructor'>Instructor</option>
                <option value='student'>Student</option>
                <option value='graduate'>Graduate</option>
              </select>
            </label>
    
            <div className="submit">
              <button>submit</button>
            </div>
          </div>
        </form>
      );


}