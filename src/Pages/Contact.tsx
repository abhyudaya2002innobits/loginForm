import { Card, Col, Row,Button} from "antd";
import { useNavigate } from "react-router-dom";
export const Contact = () => {
  const navigate = useNavigate();
  const back=()=>{
    navigate(-1)
  }
  return (
   <Row>
    <Col xl={12} xxl={14} lg={10} md={8} sm={6} xs={4}>
    <Card className="cardClass">
      This is my contact list
      <Button className="inputButton" type="primary" onClick={back}>Hey</Button>
    </Card>
    </Col>
    <Col span={12}>
    <Card className="cardClass">
      This is my contact list
    </Card>
    </Col>
    <Col span={12}>
    <Card className="cardClass">
      This is my contact list
    </Card>
    </Col>
   </Row>
  );
};