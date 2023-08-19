import './CreateTicket.css';
import { Button, DatePicker, Form, Input, Radio, Space, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextArea from 'antd/es/input/TextArea';
import { useStateValue } from '../../state/AppDataProvider';
import { Actions } from '../../state/actions';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


export const CreateTicket = () => {
   
    const [{ saveTicket, projectLanes }, dispatcher] = useStateValue();
    const { laneId, ticket } = saveTicket;

    const getLaneName = () => {
        const lane = projectLanes.find(l => l.id == laneId);
        if (lane == undefined) return;
        const { title } = lane;
        return title;
    }

    

    return <section className="create-ticket">
        
        <div className="create-ticket__form">
            <h1 className='create-ticket__title'>Create Ticket - {getLaneName()}</h1>
            <CreateTicketForm laneId={laneId}  />
        </div>
    </section>
}

const CreateTicketForm = ({ laneId,  }) => {
    const randomBetween = (min, max) => (max - min) * Math.random() + min;
    const randomList = () => {

        return [
            {
                name: 'Brad',
                photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            },
            {
                name: 'Owen',
                photo: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
            },
            ];
    };

    const [form] = Form.useForm();
    const [{ saveTicket }, dispatcher] = useStateValue();
    const { ticket } = saveTicket;
    const [state, setState] = useState({
        id: uuidv4(),
        tags: [
            'Feature Request'
            
        ],
        title: null,
        description: null,
        priority: 'Low',
        members: randomList(),
        
        date: null,
    });

 



    const onValuesChanged = (result) => {
        setState({
            ...state,
            ...result
        })
        console.log(state);
    };

    const onSubmit = (values) => {


        dispatcher({
            type: Actions.ADD_TICKET,
            payload: {
                ticket: state,
                laneId: laneId,
            },
        })
    }

    const onCancel = () => {
        dispatcher({
            type: Actions.HIDE_SAVE_TICKET,
        })
    }

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={state}
            onValuesChange={onValuesChanged}
            onFinish={onSubmit}
        // onFinishFailed={(err) => alert(`There was a problem ${err}`)}
        >
            <Form.Item
                label="Title"
                required
                name="title"
                rules={[{
                    required: true,
                    message: 'Please enter a title.'
                }]} >
                <Input size='large' />
            </Form.Item>
            <Form.Item
                label="Description"
                required
                name="description"
                rules={[{
                    required: true,
                    message: 'Please enter a description.'
                }]}
            >
                <TextArea rows={4} draggable={false} />
            </Form.Item>
            <Form.Item label="Priority" name="priority">
                <Radio.Group>
                    <Radio.Button value="No Priority">No Priority</Radio.Button>
                    <Radio.Button value="Low">Low</Radio.Button>
                    <Radio.Button value="Medium" >Medium</Radio.Button>
                    <Radio.Button value="High">High</Radio.Button>
                    <Radio.Button value="Urgent">Urgent</Radio.Button>
                </Radio.Group>
            </Form.Item>


            <Form.Item>
                <Button style={{ marginRight: '8px' }} type="primary" htmlType='submit'>Submit</Button>
                <Button htmlType="button" onClick={onCancel}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
}