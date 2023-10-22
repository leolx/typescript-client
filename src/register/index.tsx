import React from 'react';
import { Form, Input, Button, Checkbox, Tabs, Row, Col } from 'antd';
import styles from './index.module.less';
import { Footer } from 'antd/lib/layout/layout';
import githubImg from '../img/github.png';
import wechatImg from '../img/wechat.png';

const onFinish = (values: any) => {
	console.log('Received values of form: ', values);
};

export const Register = () => {
	return (
		<div className={styles.bg}>
			<div className={styles.heard}>
				<div className={styles.cloud}>
					<img src={githubImg} alt="logo" />
				</div>
				<h2 className={styles.title}>游乐场</h2>
			</div>
			<div className={styles.login_card}>
				<Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
					<Form.Item
						name="email"
						rules={[{ required: true, message: '请输入邮箱' }]}
						style={{ borderBottom: '1px solid #DCDCDC' }}
					>
						<Input placeholder="请输入邮箱" bordered={false} />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: '请设置密码!' }]}
						style={{ borderBottom: '1px solid #DCDCDC' }}
					>
						<Input bordered={false} type="password" placeholder="请设置密码" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: '请重复密码!' }]}
						style={{ borderBottom: '1px solid #DCDCDC' }}
					>
						<Input bordered={false} type="password" placeholder="请重复密码" />
					</Form.Item>

					<Form.Item>
						已有帐号，
						<a href="#" rel="external nofollow">
							点击登录
						</a>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" block style={{ height: '56PX', borderRadius: '12PX' }}>
							登录
						</Button>
					</Form.Item>
					<Form.Item name="" valuePropName="checked" style={{ textAlign: 'left' }}>
						<Checkbox style={{ color: '#CCCCCC' }}>
							我已阅读并同意《<a>用户服务协议</a>》
						</Checkbox>
					</Form.Item>
					<Button size="large" shape="circle">
						<img src={wechatImg} className={styles.wechatimg} alt="微信图片" />
					</Button>
				</Form>
			</div>

			<Footer className={styles.footer}>
				<text>底部说明</text>
			</Footer>
		</div>
	);
};
