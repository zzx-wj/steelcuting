import React, { useState, useEffect } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"
import { Form, InputNumber, Button, Divider, message, Row, Col, Statistic, Card, Space } from "antd"
import styles from "./index.module.scss"

const Index = (props) => {
  const { title, opt } = props;
  const [size, setSize] = useState("large")
  const [result, setResult] = useState({})

  const [form] = Form.useForm();

  useEffect(() => {
    console.log("挂载");
  }, []);
  const onFinish = (values) => {
    const calculateRes = opt(values)
    setResult(calculateRes)
  }
  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    message.error(errorFields + '错误')
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
        <Form.Item
          label="总宽度"
          name="overallWidth"
          rules={[
            {
              required: true,
              message: '请输入总宽度',
            },
          ]}
          colon={true}
        >
          <InputNumber
            addonAfter={'米'}
            style={{
              minWidth: '600px',
            }}
          />
        </Form.Item>

        <Form.Item
          label="总高度"
          name="overallHeight"
          rules={[
            {
              required: true,
              message: '请输入总高度',
            },
          ]}
          colon={true}
        >
          <InputNumber
            addonAfter={'米'}
            style={{
              minWidth: '600px',
            }}
          />
        </Form.Item>
        <Form.Item
          label="总厚度"
          name="overallThickness"
          rules={[
            {
              required: true,
              message: '请输入总厚度',
            },
          ]}
          colon={true}
        >
          <InputNumber
            addonAfter={'米'}
            style={{
              minWidth: '600px',
            }}
          />
        </Form.Item>

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
        <Col span={8}>
          <Card>
            <Statistic
              title="90°划线"
              value={result.scribing90}
              precision={4}
              valueStyle={{
                color: '#cf1322',
              }}
              // prefix={<ArrowUpOutlined />}
              suffix="米"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="斜面划线"
              value={result.bevelScribing}
              precision={4}
              valueStyle={{
                color: '#cf1322',
              }}
              // prefix={<ArrowDownOutlined />}
              suffix="米"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="高度划线"
              value={result.heightScribing}
              precision={4}
              valueStyle={{
                color: '#cf1322',
              }}
              // prefix={<ArrowDownOutlined />}
              suffix="米"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
