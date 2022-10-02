import {useState} from "react";
import {Form, Card, CardHeader, FormGroup, Input, Label, Button, InputGroup, InputGroupText} from "reactstrap";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const Signin = (props) => {
  const [passwordView, setPasswordView] = useState("password");
  return (
    <div>
      <Card style={{width: 400}} className="bg-white px-4">
        <h3 className="text-center my-3 fw-bold">SIGN IN</h3>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input id="email" name="email" placeholder="Enter email" type="email" className="bg-white" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <InputGroup>
              <Input name="password" type={passwordView} placeholder="Enter Password" />
              <InputGroupText className="cursor-pointer" onClick={() => (passwordView === "password" ? setPasswordView("text") : setPasswordView("password"))}>
                {passwordView === "password" ? <AiOutlineEye className="gradient-text" /> : <AiOutlineEyeInvisible className="gradient-text" />}
              </InputGroupText>
            </InputGroup>
          </FormGroup>
          <Button className="w-100 my-3 gradient-btn fw-bold">SIGN IN</Button>

          <div className="fw-bold text-center my-3 gradient-text">Forgot Password?</div>
        </Form>
      </Card>
    </div>
  );
};

export default Signin;
