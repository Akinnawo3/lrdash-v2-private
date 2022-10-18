import {useContext, useState} from "react";
import {Form, Card, CardHeader, FormGroup, Input, Label, Button, InputGroup, InputGroupText} from "reactstrap";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useAuthApiServices} from "../../services/AuthApiServices";
import {LoadingContext} from "../../contexts/LoadingContext.js";

const Signin = (props) => {
  const {loginUser} = useAuthApiServices();
  const {postLoading} = useContext(LoadingContext);

  const [passwordView, setPasswordView] = useState("password");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    const body = {phone_number: phoneNumber, password, user_type: "admin"};
    e.preventDefault();
    loginUser(body);
  };
  return (
    <div className="px-2 mt-5">
      <Card style={{width: 370}} className="bg-white px-4">
        <h3 className="text-center my-3 fw-bold">SIGN IN</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="tel">Phone Number</Label>
            <Input id="tel" name="tel" placeholder="Enter phone number" type="tel" className="bg-white" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <InputGroup>
              <Input name="password" type={passwordView} placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <InputGroupText className="cursor-pointer" onClick={() => (passwordView === "password" ? setPasswordView("text") : setPasswordView("password"))}>
                {passwordView === "password" ? <AiOutlineEye color="#04ADB2" /> : <AiOutlineEyeInvisible color="#04ADB2" />}
              </InputGroupText>
            </InputGroup>
          </FormGroup>
          <Button disabled={postLoading} className="w-100 my-3 gradient-btn fw-bold">SIGN IN</Button>

          <div className="fw-bold text-center my-3 gradient-text">Forgot Password?</div>
        </Form>
      </Card>
    </div>
  );
};

export default Signin;
