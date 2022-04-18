import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const AddStudent = () => {
  const [person, SetPerson] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: "",
    tenth_score: "",
    twelth_score: "",
    preferred_branch: ""
  });

  const personData = (e) => {
    var mandata =
      e.target.name == "gender" || e.target.name == "preferred_branch"
        ? {
            ...person,
            [e.target.name]: e.target.value
          }
        : { ...person, [e.target.className]: e.target.value };
    SetPerson(mandata);
  };

  const uploadData = (e) => {
    e.preventDefault();
    for (var y in person) {
      if (person[y].length == 0) {
        return;
      }
    }
  };

  axios
    .post("http://localhost:8080/students", {
      first_name: "person.first_name",
      last_name: "person.last_name",
      email: "person.email",
      gender: "person.gender",
      age: "person.age",
      tenth_score: "person.tenth_score",
      twelth_score: "person.twelth_score",
      preferred_branch: "person.preferred_branch"
    })
    .then(function (response) {
      console.log(response);
      document.getElementById("newform").reset();
      SetPerson({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        age: "",
        tenth_score: "",
        twelth_score: "",
        preferred_branch: ""
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <form className="addstudent">
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          onChange={personData}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={personData}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={personData}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onClick={personData}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onClick={personData}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={personData}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={personData}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={personData}
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input
        className="submit"
        type="submit"
        value="Submit"
        onClick={uploadData}
      />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
