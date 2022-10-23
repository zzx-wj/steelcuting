import React, { useState, useEffect } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"
import { Form, InputNumber, Button, Divider, message, Row, Col, Statistic, Card, Space } from "antd"
import styles from "./index.module.scss"

const Index = (props) => {
  const { title, opt, inputs, outputs } = props;
  const [size, setSize] = useState("large")
  const [result, setResult] = useState({

  })

  const [form] = Form.useForm();

  useEffect(() => {
    console.log("挂载");
  }, []);
  const onFinish = (values) => {
    console.log("将要计算的值是：");
    console.log(values);
    const calculateRes = opt(values)
    setResult(calculateRes)
  }
  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    console.log(values);
    console.log(errorFields);
    console.log(outOfDate);
    message.error(errorFields[0].errors[0])
  }
  const reset = () => {
    form.resetFields();
    setResult({})
  }
  return (
    <div>
      <h1 className={styles.title} >{title}</h1>
      <Form
        form={form}
        name="basic"
        size={size}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {
          inputs.map((input) => {
            return (
              <Form.Item
                key={input.key}
                label={input.label}
                name={input.key}
                rules={[
                  {
                    required: true,
                    message: `请输入${input.label}`,
                  },
                ]}
                colon={true}
              >
                <InputNumber
                  addonAfter={'mm'}
                  style={{
                    minWidth: '600px',
                  }}
                />
              </Form.Item>
            )
          })
        }

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Space direction='horizontial' size={'large'}>
            <Button type="primary" htmlType="submit">
              计算
            </Button>
            <Button type="ghost " htmlType="button" onClick={reset}>
              重置
            </Button>
          </Space>

        </Form.Item>
      </Form>
      <Divider plain={true}>下方为输出结果</Divider>
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        {

          outputs.map((output) => {
            return (
              <Col span={outputs.length <= 4 ? 24 / outputs.length : 8} key={output.key}>
                <Card>
                  <Statistic
                    title={output.label}
                    value={result[output.key]}
                    precision={2}
                    valueStyle={{
                      color: '#cf1322',
                    }}
                    // prefix={<ArrowUpOutlined />}
                    suffix="mm"
                  />
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </div>
  );
}

export default Index;
